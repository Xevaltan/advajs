const superagent = require("superagent");
const fs = require("fs");

/**
 *
 * @param {"file" | "folder" | "fileHTTP"} type
 * @param {string} url
 */
let advrequire = (type, url) => {
  if (url) {
    if ("file" === type) {
      return require(url);
    }
    if ("folder" === type) {
      return {
        getfile: async (file) => {
          return require(`${url}/${file}`);
        },
        getfiles: async () => {
          let ret = [""];
          fs.readdir(url, (err, files) => {
            if (err) throw err;
            ret = files;
          });
          return ret;
        },
      };
    }
    if ("fileHTTP" === type) {
      let http = "";
      superagent(url).on("response", (res) => {
        http = res;
      });
      return http;
    }
  }
};
module.exports = advrequire;
