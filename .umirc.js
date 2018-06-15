export default {
  "hashHistory": true,
  "plugins": [
    ["umi-plugin-dva", { immer: true }],
    ["umi-plugin-routes", {
      "exclude": [
        /models/,
        /services/,
        /common/
      ]
    }]
  ],
  "proxy": {
    "/proxy": {
      "target": "http://jsonplaceholder.typicode.com/",
      "changeOrigin": true,
      "pathRewrite": { "^/proxy" : "" }
    }
  }
}