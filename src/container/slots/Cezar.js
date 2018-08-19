import React, { Fragment } from "react";

import Slot from "./Slot";

import Styles from "./styles.css";

export default class Cezar extends Slot {
  componentDidMount = () => {
    this.props.params.offset = 15;
    this.forceUpdate();
  };

  onChangeOffset = event => {
    console.log(event.target.value);
    this.props.params.offset = !isNaN(Number(event.target.value))
      ? ~~Number(event.target.value)
      : this.props.params.offset;
    this.forceUpdate(); // FIXME:
    this.props.update();
  };

  get header() {
    const { params } = this.props;

    return `Cezar (${params.offset > 0 ? "+" : ""}${params.offset})`;
  }

  get content() {
    const { params } = this.props;

    return (
      <form>
        <label>Величина сдвига</label>
        <input
          type="number"
          onChange={this.onChangeOffset}
          value={params.offset}
          style={{
            width: "25pt"
          }}
        />
      </form>
    );
  }
}
