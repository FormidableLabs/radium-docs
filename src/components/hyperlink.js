import React from "react";
import Radium from "radium";
import { OutboundLink } from "react-ga";
import { Link } from "react-router";

import settings from "../radium-settings";

const RadiumLink = Radium(Link);
const RadiumOutboundLink = Radium(OutboundLink);

class Hyperlink extends React.Component {
  constructor(props) {
    super(props);
  }

  getStyles() {
    return {
      base: {
        color: settings.red,
        cursor: "pointer",
        display: "inline",
        transition: "color 0.195s ease-in",
        textDecoration: "none",
        ":hover": {
          color: settings.black,
          transition: "color 0.225s ease-out"
        }
      },
      onDark: {
        color: settings.white,
        ":hover": {
          color: settings.lightGray
        }
      }
    };
  }

  render() {
    const styles = this.getStyles();

    const resolvedStyles = [
      styles.base,
      this.props.theme && styles[this.props.theme],
      this.props.style
    ];

    if (this.props.destination === "internal") {
      return (
        <RadiumLink
          style={resolvedStyles}
          to={this.props.href}
          {...this.props}
        >
          {this.props.children}
        </RadiumLink>
      );
    }

    return (
      <RadiumOutboundLink
        style={resolvedStyles}
        to={this.props.href}
        eventLabel={this.props.href}
        {...this.props}
      >
        {this.props.children}
      </RadiumOutboundLink>
    );
  }
}

Hyperlink.propTypes = {
  children: React.PropTypes.node,
  destination: React.PropTypes.oneOf(["internal", "external"]).isRequired,
  href: React.PropTypes.string.isRequired,
  theme: React.PropTypes.oneOf(["onDark"]),
  style: React.PropTypes.object
};

Hyperlink.defaultProps = {
  destination: "external"
};

export default Radium(Hyperlink);
