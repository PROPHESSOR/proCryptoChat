import React from "react";

import Slot from "./Slot";

export default class Reverse extends Slot {
  state = {
    collapsible: false
  };

  get header() {
    return "Reverse";
  }
}
