const { userConf } = require('./config/index')
module.exports = {
  root: true,
  parser: userConf.babel7Support ? '@babel/eslint-parser' : 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  extends: 'standard',
  settings: {
    "html/html-extensions": [".html", ".mpx"],  // consider .html and .mpx files as HTML
  },
  plugins: [
    'html'
  ],
  'globals': {
    'wx': true,
    'getApp': true,
    'App': true,
    '__mpx_mode__': true
  }
}
