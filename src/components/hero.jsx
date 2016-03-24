import React from "react";
import Radium from "radium";

import settings from "../radium-settings";

class Hero extends React.Component {
  getInstallerStyles() {
    return {
      zIndex: "1",
      margin: "0",
      position: "relative",
      textAlign: "center"
    };
  }

  getInstallerHeadingStyles() {
    return {
      backgroundColor: settings.gold,
      border: `1px solid ${settings.darkGold}`,
      color: settings.jet,
      display: "inline-block",
      fontFamily: settings.monospace,
      fontSize: "1.5rem",
      lineHeight: 1.2,
      margin: "0 auto",
      padding: "1em 2em",
      textAlign: "center"
    };
  }

  render() {
    return (
      <header className="Header Row">
        <h1 className="Logo">
          Radium
        </h1>
        <div style={this.getInstallerStyles()}>
          <h2 style={this.getInstallerHeadingStyles()}>npm install radium</h2>
        </div>
      </header>
    );
  }
}

export default Radium(Hero);
