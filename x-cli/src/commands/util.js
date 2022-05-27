const shell = require('shelljs')

class Util {
  static async createFolder(fullPath) {
    console.log(`creating folder in ${fullPath}`)
    await shell.mkdir('-p', fullPath)
  }
}

module.exports = Util
