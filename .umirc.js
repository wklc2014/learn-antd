export default {
  "hashHistory": true,
  "plugins": [
    ["umi-plugin-dva", { immer: true }],
    ["umi-plugin-routes", {
      "exclude": [
        /models/,
        /model/,
        /services/,
        /service/,
        /components/,
        /common/
      ]
    }]
  ]
}
