import React, { Component } from "react";

import EmptySlot from "./slots/EmptySlot";
import Cezar from "./slots/Cezar";
import Base64 from "./slots/Base64";
import Reverse from "./slots/Reverse";
import AES from "./slots/AES";

import codecs from "../codecs";

import CSSStyles from "./styles.css";

const Styles = {
  text: {
    color: "white"
  }
};

// List of available codec: [[codecObject, codecSlotComponent]]
const Codecs = [
  [codecs.cezar, Cezar],
  [codecs.base64, Base64],
  [codecs.reverse, Reverse],
  [codecs.aes, AES]
];

export default class Container extends Component {
  state = {
    slots: [],
    input: "",
    preview: true
  };
  onInput = ({ target }) => {
    this.setState({ input: target.value });
  };
  onCrypt = () => {};
  onDecrypt = () => {};
  onAddSlot = () => {
    this.setState({
      slots: [
        ...this.state.slots,
        {
          component: EmptySlot,
          codec: null,
          params: {
            slots: this.state.slots,
            setState: this.setState.bind(this),
            codecs: Codecs
          }
        }
      ]
    });
  };
  onPreviewToggle = () => {
    this.setState({ preview: !this.state.preview });
  };

  update = () => this.forceUpdate();

  encode = () => {
    const { slots, input } = this.state;
    let out = input;
    for (const slot of slots) {
      if (!slot.codec) {
        console.warn("Unknown codec", slot.codec, "!");
        continue;
      }
      out = slot.codec.encode(out, slot.params);
    }
    return out;
  };

  render() {
    const { slots, input, preview } = this.state;

    const htmlslots = slots.map((e, i) => (
      <e.component
        key={i}
        params={e.params}
        update={this.update}
        slots={slots}
        setState={this.setState.bind(this)}
        codec={e.codec}
      />
    ));

    return (
      <div className="container">
        <div id="log" />
        <textarea id="message" onInput={this.onInput} />
        {
          //<button id="send">Crypt</button>
          //<button id="send2">Decrypt</button>
        }
        {preview ? (
          <textarea
            readOnly
            id="preview"
            placeholder="Preview"
            value={this.encode()}
          />
        ) : null}
        <span style={{ color: "white" }}>Crypto slots:</span>
        <div
          style={{
            color: "white",
            float: "right"
          }}
        >
          <label>Preview: </label>
          <input
            type="checkbox"
            checked={preview}
            onClick={this.onPreviewToggle}
          />
        </div>
        <div id="slots">{htmlslots}</div>
        {/*<button onClick={this.onAddSlot}>Add slot</button>*/}
        <EmptySlot
          params={{
            codecs: Codecs,
            setState: this.setState.bind(this),
            slots: this.state.slots
          }}
        />
      </div>
    );
  }
}
