import React from "react";

import Slot from "./Slot";

export default class Base64 extends Slot {
  state = {
    collapsible: false
  };

  get header() {
    return "Base64";
  }
}
