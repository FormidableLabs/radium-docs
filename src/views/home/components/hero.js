import React from "react";
import Radium from "radium";

import RadLink from "../../../components/hyperlink";
import theme from "../../../radium-theme";
import RADLOGO from "../../../../static/logo.svg";
import GITHUBLOGO from "../../../../static/logo-github.svg";

class Hero extends React.Component {
  getHeroStyles() {
    return {
      header: {
        backgroundColor: "#050505",
        backgroundImage: "url(./static/bg-radium.jpg)",
        backgroundPosition: "bottom center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "80vh",
        [`@media ${theme.mediaSizes.medium}`]: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
          minHeight: "650px",
          padding: "10% 1rem 2rem"
        },
        [`@media ${theme.mediaSizes.small}`]: {
          minHeight: "580px",
          padding: "5% .5rem 1rem"
        }
      },
      intro: {
        display: "flex",
        justifyContent: "space-between",
        margin: "auto",
        padding: 0,
        width: "auto",
        [`@media ${theme.mediaSizes.medium}`]: {
          flexWrap: "nowrap"
        },
        [`@media ${theme.mediaSizes.small}`]: {
          justifyContent: "center",
          flexDirection: "column",
          flexWrap: "wrap"
        }
      },
      logo: {
        [`@media ${theme.mediaSizes.medium}`]: {
          flex: "0 1 360px",
          marginRight: "3.75rem"
        },
        [`@media ${theme.mediaSizes.small}`]: {
          maxWidth: "180px",
          margin: "0 auto"
        }
      },
      copy: {
        color: theme.white,
        flex: "1 1 auto",
        [`@media ${theme.mediaSizes.small}`]: {
          textAlign: "center"
        }
      },
      heading: {
        fontFamily: theme.sansSerif,
        MozOsxFontSmoothing: "grayscale",
        WebkitFontSmoothing: "antialiased",
        [`@media ${theme.mediaSizes.small}`]: {
          margin: "0"
        }
      },
      paragraph: {
        fontFamily: theme.monospace,
        fontSize: "0.875rem",
        lineHeight: "1.5",
        maxWidth: "30em",
        MozOsxFontSmoothing: "grayscale",
        WebkitFontSmoothing: "antialiased",
        [`@media ${theme.mediaSizes.small}`]: {
          margin: "0 auto"
        }
      },
      installer: {
        backgroundColor: theme.charcoal,
        marginTop: "2rem",
        marginBottom: "5rem",
        maxWidth: "30em",
        padding: "2em",
        textAlign: "center",
        [`@media ${theme.mediaSizes.small}`]: {
          margin: "2rem auto",
          padding: "1em"
        }
      },
      installerHeading: {
        color: theme.white,
        fontFamily: theme.monospace,
        MozOsxFontSmoothing: "grayscale",
        WebkitFontSmoothing: "antialiased",
        fontWeight: "normal",
        fontSize: "1.125rem",
        lineHeight: 1.2,
        margin: 0
      },
      nav: {
        marginTop: "auto",
        maxWidth: "840px",
        width: "100%"
      },
      navList: {
        color: theme.white,
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        fontFamily: theme.monospace,
        margin: 0,
        padding: 0,
        width: "100%",
        MozOsxFontSmoothing: "grayscale",
        WebkitFontSmoothing: "antialiased",
        justifyContent: "space-between",
        letterSpacing: "0.09em",
        listStyle: "none",
        textTransform: "uppercase",
        [`@media ${theme.mediaSizes.medium}`]: {
          margin: "1rem -1.5em"
        }
      },
      navListItem: {
        padding: "1em",
        fontSize: "12px",
        [`@media ${theme.mediaSizes.medium}`]: {
          padding: "1.5em",
          fontSize: "14px"
        }
      },
      logoGithub: {
        color: "inherit",
        display: "inline-block",
        marginRight: "8px",
        width: "18px",
        verticalAlign: "middle"
      }
    };
  }

  render() {
    const styles = this.getHeroStyles();

    return (
      <header style={styles.header}>
        <div style={styles.intro}>
          <div style={styles.logo} dangerouslySetInnerHTML={{__html: RADLOGO}} />
          <div style={styles.copy}>
            <h1 style={styles.heading}>Radium</h1>
            <p style={styles.paragraph}>Radium is a set of tools to manage inline styles on React elements. It gives you powerful styling capabilities without CSS.</p>
            <div style={styles.installer}>
              <h2 style={styles.installerHeading}>npm install radium</h2>
            </div>
          </div>
        </div>
        <nav style={styles.nav}>
          <ul style={styles.navList}>
            <li style={styles.navListItem}>
              <RadLink destination="external" href="https://github.com/FormidableLabs/radium" theme="onDark">
                <span style={styles.logoGithub} dangerouslySetInnerHTML={{__html: GITHUBLOGO}} />
                GitHub Project
              </RadLink>
            </li>
            <li style={styles.navListItem}>
              <RadLink destination="internal" href="/docs/guide" theme="onDark">
                Using Radium
              </RadLink>
            </li>
            <li style={styles.navListItem}>
              <RadLink destination="internal" href="/docs/api" theme="onDark">
                API Docs
              </RadLink>
            </li>
            <li style={styles.navListItem}>
              <RadLink destination="internal" href="/docs/faq" theme="onDark">
                F.A.Q.
              </RadLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Radium(Hero);
