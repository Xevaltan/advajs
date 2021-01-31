/**
 *
 * @param {string} string
 */
let setRandUpCase = (string) => {
  if (typeof string === "string") {
    let ret = "";
    string.split("").forEach((letter) => {
      let rdnbr = Math.random() * 2;
      if (rdnbr < 1) {
        ret += letter.toUpperCase();
      } else if (rdnbr > 1) {
        ret += letter.toLowerCase();
      }
    });
    return ret;
  }
};

module.exports = setRandUpCase;
