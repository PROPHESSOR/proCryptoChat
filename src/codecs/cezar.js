/**
 * Copyright (c) PROPHESSOR 2018
 */

const process = (input, offset) => {
  const numbers = input.split("").map(e => e.charCodeAt() + offset);
  return String.fromCharCode(...numbers);
};

export default {
  name: { def: "Cezar", ru: "Шифр Цезаря" },
  symbol: "C",
  encode(input, { mode = "unicode", offset = 15 } = {}) {
    return process(input, offset);e(...numbers);
  },
  decode(input, { mode = "unicode", offset = 15} = {}) {
    return process(input, -offset);e(...numbers);
  }
};
