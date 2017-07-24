'use strict'
const fs = require('graceful-fs')
const path = require('path')
const isSubdir = require('is-subdir')

module.exports = function (parent, relativePathToLink) {
  const linkPath = path.resolve(parent, relativePathToLink)
  return new Promise((resolve, reject) => {
    fs.realpath(linkPath, (err, target) => {
      if (err) {
        reject(err)
        return
      }
      resolve({
        isInner: isSubdir(parent, target),
        target
      })
    })
  })
}
