/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by @hiyuki
*/
const loaderUtils = require('loader-utils')
const path = require('path')

module.exports = function getLocalIdent (loaderContext, localIdentName, localName, options) {
  if (!options.context) {
    if (loaderContext.rootContext) {
      options.context = loaderContext.rootContext
    } else if (loaderContext.options && typeof loaderContext.options.context === 'string') {
      options.context = loaderContext.options.context
    } else {
      options.context = loaderContext.context
    }
  }
  const request = path.relative(options.context, loaderContext.resourcePath)
  options.content = options.hashPrefix + request + '+' + localName
  localIdentName = localIdentName.replace(/\[local\]/gi, localName)
  const hash = loaderUtils.interpolateName(loaderContext, localIdentName, options)
  /* eslint-disable prefer-regex-literals */
  return hash.replace(new RegExp('[^a-zA-Z0-9\\-_\u00A0-\uFFFF]', 'g'), '-').replace(/^((-?[0-9])|--)/, '_$1')
}
