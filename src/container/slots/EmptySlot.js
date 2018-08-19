import React from "react";

import Slot from "./Slot";

export default class Empty extends Slot {
  state = {
    removable: false,
    collapsible: true
  };

  onCodecClick = event => {
    const { slots, setState, codecs } = this.props.params;
    const index = event.target.getAttribute("index");

    setState({
      slots: [
        ...slots,
        {
          slots,
          setState,
          codec: codecs[index][0],
          component: codecs[index][1],
          params: {}
        }
      ]
    });
    this.setState({ opened: false });
  };
  get header() {
    return "Add slot";
  }

  get content() {
    const { codecs } = this.props.params;

    const htmlCodecs = codecs.map((e, i) => (
      <li key={i} index={i} onClick={this.onCodecClick}>
        {e[0].name.def}
      </li>
    ));

    return <ul>{htmlCodecs}</ul>;
  }
}
