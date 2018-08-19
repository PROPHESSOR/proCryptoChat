import React from "react";

import Styles from "./styles.css";

export default class Slot extends React.Component {
  state = {
    opened: false,
    collapsible: true,
    removable: true
  };

  onClick = () => {
    this.setState({ opened: !this.state.opened });
  };

  onRemove = () => {
    console.log(this.props);
    const { slots, setState, params, codec } = this.props;

    setState({ slots: slots.filter(e => e.codec !== codec) });
  };

  get header() {
    return "Header";
  }

  get content() {
    return "Some content";
  }

  render() {
    const { opened, collapsible, removable } = this.state;

    let classes = "slot";

    if (opened) classes += " slot-opened";

    return (
      <div className={classes}>
        <div
          className={collapsible ? "slot-collapsible" : null}
          onClick={this.onClick}
        >
          {this.header}
        </div>
        {removable ? (
          <div className="cross" onClick={this.onRemove}>
            X
          </div>
        ) : null}
        {collapsible ? <div className="content">{this.content}</div> : null}
      </div>
    );
  }
}
