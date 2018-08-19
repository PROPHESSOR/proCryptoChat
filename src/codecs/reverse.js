/**
 * Copyright (c) PROPHESSOR 2018
 */

const reverse = input =>
  input
    .split("")
    .reverse()
    .join("");

export default {
  name: {
    def: "Reverse"
  },
  encode: reverse,
  decode: reverse
};
