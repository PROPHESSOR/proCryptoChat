/**
 * Copyright UsernameAK 2018
 */

import md5 from "./util/md5";
const AESJS = require("./util/aesjs");

export default {
  name: { def: "AES" },
  symbol: "A",
  encode(input, { mode = "cbc", key = "key", iv = "iv" }) {
    iv = AESJS.utils.hex.toBytes(md5(iv));
    key = AESJS.utils.hex.toBytes(md5(key));
    const op = new AESJS.ModeOfOperation[mode](key, iv);
    const bytes = AESJS.utils.utf8.toBytes(input);
    const padded = AESJS.padding.pkcs7.pad(bytes);
    return AESJS.utils.hex.fromBytes(op.encrypt(padded));
  },
  decode(input, { mode = "cbc", key = "key", iv = "iv" } = {}) {
    iv = AESJS.utils.hex.toBytes(md5(iv));
    key = AESJS.utils.hex.toBytes(md5(key));
    const op = new AESJS.ModeOfOperation[mode](key, iv);
    const bytes = AESJS.utils.hex.toBytes(input);
    const stripped = AESJS.padding.pkcs7.strip(bytes);
    return AESJS.utils.utf8.fromBytes(op.decrypt(stripped));
  }
};
