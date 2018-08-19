/**
 * Copyright (c) UsernameAK 2018
 */

import React from "react";

import Slot from "./Slot";

import Styles from "./styles.css";

export default class Cezar extends Slot {
  constructor() {
    super({
      params: {
        mode: "cbc",
        key: "key",
        iv: "iv",

        noiv: false
      }
    });
  }

  onChangeMode = event => {
    console.log(event.target.value);
    this.props.params.mode = event.target.value;
    if (event.target.value === "ecb") {
      this.props.params.noiv = true;
    } else {
      this.props.params.noiv = false;
    }
    this.forceUpdate(); // FIXME:
    this.props.update();
    event.stopPropagation();
  };

  onChangeKey = event => {
    console.log(event.target.value);
    this.props.params.key = event.target.value;
    this.forceUpdate(); // FIXME:
    this.props.update();
    event.stopPropagation();
  };

  onChangeIV = event => {
    console.log(event.target.value);
    this.props.params.iv = event.target.value;
    this.forceUpdate(); // FIXME:
    this.props.update();
    event.stopPropagation();
  };

  stopThatPropagation = event => {
    event.stopPropagation();
  };

  get header() {
    return `AES`;
  }

  get content() {
    const { params } = this.props;

    return (
      <form>
        <label>Режим работы</label>
        <select
          onChange={this.onChangeMode}
          value={params.mode}
          onClick={this.stopThatPropagation}
        >
          <option value="cbc" selected>
            CBC (Best)
          </option>
          <option value="ecb">ECB (Worst)</option>
          <option value="cfb">CFB</option>
          <option value="ofb">OFB</option>
          <option value="ctr">CTR</option>
        </select>
        <br />
        <label>Ключ</label>
        <input
          onClick={this.stopThatPropagation}
          onChange={this.onChangeKey}
          value={params.key}
        />
        <br />
        <label style={{ display: params.noiv ? "none" : "" }}>
          Вектор инициализации
        </label>
        <input
          onChange={this.onChangeIV}
          value={params.iv}
          style={{ display: params.noiv ? "none" : "" }}
          onClick={this.stopThatPropagation}
        />
      </form>
    );
  }
}

/*import React, { Fragment } from "react";

import Slot from "./Slot";

import Styles from "./styles.css";

export default class AES extends Slot {
  state = {
    opened: false
  };

  onClick = () => {
    this.setState({ opened: !this.state.opened });
  };

  onChangeMode = event => {
    console.log(event.target.value);
    this.props.params.mode = event.target.value;
    this.forceUpdate();
  };

  render() {
    const { opened } = this.state;
    const { params } = this.props;

    let classes = "slot";

    if (opened) classes += " slot-opened";

    return (
      <div className={classes}>
        <div onClick={this.onClick}>
          AES
        </div>
        <div className="content">
          <form>
            <label>Режим работы</label>
            <select
              onChange={this.onChangeOffset}
              value={params.mode}
            >
              <option value="cbc" selected>CBC</option>
              <option value="ecb">ECB</option>
              <option value="cfb">CFB</option>
              <option value="ofb">OFB</option>
              <option value="ctr">CTR</option>

            </select>
          </form>
        </div>
      </div>
    );
  }
}
*/
