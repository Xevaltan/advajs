/**
 *
 * @param {number | string} item
 */
let reverse = (item) => {
  if (typeof item === "string") {
    return item.split("").reverse().join("");
  } else if (typeof item === "number") {
    return parseInt(`-${item.toString()}`);
  }
};

module.exports = reverse;
