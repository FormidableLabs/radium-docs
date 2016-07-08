import React from "react";
import Radium from "radium";

class Button extends React.Component {
  getStyles() {
    return {
      base: {

      }
    };
  }

  getChildStyles() {
    return {

    };
  }

  render() {
    const { children, theme, size, onClick, disabled, overrideStyles } = this.props;
    const styles = this.getStyles();

    return (
      <button
        style={[styles.base, styles.size[size], styles.theme[theme], overrideStyles]}
        onClick={onClick}
        disabled={disabled}
      >
        <span style={this.getChildStyles()}>{children}</span>
      </button>
    );
  }
}

Button.defaultProps = {
  size: "medium",
  theme: "primary",
  onClick: null,
  disabled: false,
  overrideStyles: null
};

Button.propTypes = {
  size: React.PropTypes.oneOf([
    "small",
    "medium",
    "large"
  ]),
  theme: React.PropTypes.oneOf([
    "primary",
    "light",
    "dark"
  ]),
  children: React.PropTypes.any.isRequired,
  onClick: React.PropTypes.func,
  disabled: React.PropTypes.bool,
  overrideStyles: React.PropTypes.object
};

export default Radium(Button);
