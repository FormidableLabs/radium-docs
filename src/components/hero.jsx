import React from "react";
import Radium from "radium";

import settings from "../radium-settings";
import RADLOGO from "../../static/logo.svg";

class Hero extends React.Component {
  getHeroStyles() {
    return {
      header: {
        backgroundColor: "#050505",
        backgroundImage: `url(./static/bg-radium.png)`,
        backgroundPosition: "bottom center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        minHeight: "600px",
        height: "90vh"
      },
      intro: {
        border: "1px solid red",
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "space-between",
        marginTop: "20vh"
      },
      logo: {
        flex: "0 0 360px"
      },
      description: {
        flex: "1 0 auto"
      },
      installer: {
        zIndex: "1",
        margin: "0",
        position: "relative",
        textAlign: "center"
      },
      installerHeading: {
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

      },
      nav: {
        border: "1px solid blue"
      }
    };
  }

  render() {
    const styles = this.getHeroStyles();

    return (
      <header style={styles.header}>
        <div style={styles.intro}>
          <div style={styles.logo} dangerouslySetInnerHTML={{__html: RADLOGO}} />
          <div style={styles.description}>
            <h1>Radium</h1>
            <div style={styles.installer}>
              <h2 style={styles.installerHeading}>npm install radium</h2>
            </div>
          </div>
        </div>
        <nav style={styles.nav}>
          <ul>
            <li><a href="">FormidableLabs</a></li>
            <li><a href="">FormidableLabs</a></li>
            <li><a href="">FormidableLabs</a></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Radium(Hero);
