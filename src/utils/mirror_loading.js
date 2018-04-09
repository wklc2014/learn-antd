const addLoadingToEffects = (name, mirror) => {
  Object.keys(mirror.actions).forEach(namespace => {
    if (namespace === name) { return }
    const modelActions = mirror.actions[namespace]
    // map over effects within models
    Object.keys(modelActions).forEach(action => {
      if (mirror.actions[namespace][action].isEffect) {
        // copy function
        const fn = mirror.actions[namespace][action]
        // replace function with pre & post loading calls
        mirror.actions[namespace][action] = async function (props) {
          mirror.actions.loading.show({ namespace, action })
          await fn(props)
          mirror.actions.loading.hide({ namespace, action })
        }
      }
    })
  })
}

const createModel = (name, mirror, options) => {

  // function to generate both "show" & "hide" reducers
  const createLoadingAction = (show) => (state, { namespace, action }) => {
    const next = Object.assign({}, state, {
      global: show,
      models: Object.assign({}, state.models, { [namespace]: show }),
    })
    if (options.effects) {
      next.effects = Object.assign({}, state.effects, {
        [namespace]: Object.assign({}, state.effects[namespace], {
          [action]: show
        })
      })
    }
    return next
  }

  // create mirror "loading" model
  const model = {
    name,
    initialState: {
      global: false,
      models: {},
    },
    reducers: {
      show: createLoadingAction(true),
      hide: createLoadingAction(false),
    }
  }

  // add effects if option specified
  if (options.effects) {
    // collect initial models for effects and create empty objects
    model.initialState.effects = Object.keys(mirror.actions || {})
    .reduce((models, namespace) => {
      models[namespace] = {}
      return models
    }, {})
  }

  // instantiate model
  mirror.model(model)
}


/**
 * mirror
 * options
 *  - name (string) - name of loading model
 *  - effects (bool) - whether or not to have specific effect loading indicators
 */
export default (mirror, options = {}) => {
  const name = options.name || 'loading'
  // create model
  createModel(name, mirror, options)

  // map over actions
  addLoadingToEffects(name, mirror)
}