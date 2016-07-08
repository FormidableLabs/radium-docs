import React from "react";
import Radium from "radium";
import color from "color";

import radiumTheme from "../radium-theme";

class Button extends React.Component {
  getStyles() {
    return {
      base: {
        position: "relative",
        display: "inline-block",
        fontFamily: radiumTheme.monospace,
        lineHeight: 1.4,
        whiteSpace: "nowrap",
        cursor: "pointer",
        userSelect: "none",
        borderWidth: "1px",
        borderStyle: "solid",
        appearance: "none",
        transition: "background 250ms ease-in-out, box-shadow 250ms ease-in-out",
        ":hover": {
          boxShadow: "1px 5px 10px rgba(0,0,0,.3)"
        }
      },
      theme: {
        primary: {
          borderColor: color(radiumTheme.charcoal).darken(.5).hexString(),
          background: radiumTheme.charcoal,
          color: radiumTheme.white,
          ":hover": {
            background: color(radiumTheme.charcoal).darken(.5).hexString()
          }
        },
        dark: {
          borderColor: color(radiumTheme.black).darken(.5).hexString(),
          background: radiumTheme.black,
          color: radiumTheme.lighterGray,
          ":hover": {
            background: color(radiumTheme.black).darken(.5).hexString()
          }
        },
        light: {
          borderColor: color(radiumTheme.lighterGray).darken(.5).hexString(),
          background: radiumTheme.lighterGray,
          color: radiumTheme.darkCharcoal,
          ":hover": {
            background: color(radiumTheme.lighterGray).darken(.5).hexString()
          }
        }
      },
      size: {
        small: {
          padding: "2px 10px",
          fontSize: ".8rem"
        },
        medium: {
          padding: "4px 10px",
          fontSize: "1rem"
        },
        large: {
          padding: "8px 20px",
          fontSize: "1.4rem"
        }
      },
      disabled: {
        opacity: .4,
        cursor: "not-allowed"
      }
    };
  }

  render() {
    const { children, theme, size, onClick, disabled, styleOverrides } = this.props;
    const styles = this.getStyles();

    return (
      <button
        style={[
          styles.base,
          styles.theme[theme],
          styleOverrides,
          disabled && styles.disabled
        ]}
        onClick={onClick}
        disabled={disabled}
      >
        <span style={[{
          width: "auto",
          display: "block",
          lineHeight: 2
        }, styles.size[size]]}
        >
          {children}
        </span>
      </button>
    );
  }
}

Button.defaultProps = {
  size: "medium",
  theme: "primary",
  onClick: null,
  disabled: false,
  styleOverrides: null
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
  styleOverrides: React.PropTypes.object
};

export default Radium(Button);
