
// ref: https://umijs.org/config/
export default {
  history: 'hash',
  publicPath: './',
  treeShaking: true,
  // proxy: {
    // '/2019ncov': {
    //   target: 'https://api.st.link/angelia',
    //   changeOrigin: true
    // }
  // },
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', component: '../pages/index' }
      ]
    }
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: false,
      dva: false,
      dynamicImport: false,
      title: '武汉肺炎',
      dll: false,

      routes: {
        exclude: [
          /components\//,
        ],
      },
    }],
  ],
}
