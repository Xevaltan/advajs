const fs = require("fs");
const advaReq = require("./require");

let fileWriter = class fileWriter {
  constructor(fileUrl) {
    this.fileReq = advaReq("file", fileUrl);
    this.fileURL = fileUrl;
  }
  /**
   *
   * @param {string} keyName
   * @param {any} value
   */
  async addKey(keyName, value) {
    if (typeof keyName === "string") {
      this.fileReq[keyName] = value;
      fs.writeFile(this.fileURL, this.fileReq, (err) => {
        if (err) throw err;
      });

      return value;
    }
  }
  /**
   *
   * @param {string} keyName
   */
  async removeKey(keyName) {
    if (typeof keyName === "string") {
      delete this.fileReq[keyName];
      fs.writeFile(this.fileURL, this.fileReq, (err) => {
        if (err) throw err;
      });

      return keyName;
    }
  }
  /**
   *
   * @param {string} keyName
   * @param {any} value
   */
  async editKey(keyName, value) {
    if (typeof keyName === "string") {
      this.fileReq[keyName] = value;
      fs.writeFile(this.fileURL, this.fileReq, (err) => {
        if (err) throw err;
      });
      return value;
    }
  }
};

module.exports = fileWriter;
