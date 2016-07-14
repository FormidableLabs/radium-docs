import React from "react";
import Radium from "radium";

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { styles, kind, disabled } = this.props;
    return (
      <button
        style={[
          styles.base,
          styles[kind],
          disabled && styles.disabled
        ]}
        disabled={disabled}
      >
        {this.props.children}
      </button>
    );
  }
}

Button.defaultProps = {
  kind: "primary",
  disabled: false
};

Button.propTypes = {
  kind: React.PropTypes.oneOf([
    "primary",
    "secondary",
    "warning"
  ]),
  styles: React.PropTypes.object,
  disabled: React.PropTypes.bool,
  children: React.PropTypes.any
};

export default Radium(Button);
