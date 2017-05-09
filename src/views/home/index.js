import React from "react";
import Radium, { Style } from "radium";
import Hero from "./components/hero";
import Demo from "./components/demo";
import RadiumLink from "../../components/hyperlink";
import RadiumButton from "../../components/button";
import { Footer, Header } from "formidable-landers";

import theme from "../../radium-theme";

class Home extends React.Component {

  getStyles() {
    return {
      content: {
        padding: `5px ${theme.gutter}px ${theme.gutter * 2}px`
      },
      contentBlock: {
        margin: `${theme.gutter * 2}px auto`,
        maxWidth: "720px",
        WebkitFontSmoothing: "antialiased"
      },
      commonHeadsFoots: {
        margin: "0 auto",
        maxWidth: "840px"
      },
      displayCopy: {
        color: theme.charcoal,
        fontFamily: theme.sansSerif
      },
      copy: {
        color: theme.darkCharcoal,
        fontFamily: theme.serif
      },
      documentationCTA: {
        background: theme.lighterGray,
        textAlign: "center"
      },
      footerLink: {
        color: theme.red,
        transition: "color 195ms ease-in",
        textDecoration: "none",
        ":hover": {
          color: theme.white,
          transition: "color 225ms ease-out"
        }
      },
      footer: {
        margin: "0px",
        fontFamily: theme.monospace,
        MozOsxFontSmoothing: "grayscale",
        WebkitFontSmoothing: "antialiased",
        fontSize: "16px",
        letterSpacing: "normal",
        padding: "4em 1em",
        color: theme.white
      },
      headerLink: {
        color: theme.lightGray,
        fontFamily: theme.monospace,
        MozOsxFontSmoothing: "grayscale",
        WebkitFontSmoothing: "antialiased",
        transition: "color 195ms ease-in",
        textDecoration: "none",
        ":hover": {
          color: theme.white,
          transition: "color 225ms ease-out"
        }
      }
    };
  }

  render() {
    const styles = this.getStyles();
    const trademark = <div className="default">Radium&reg; is a trademark of Formidable Labs, Inc.</div>;

    return (
      <main role="main">
        <Header
          containerStyle={styles.commonHeadsFoots}
        >
        <Style
          scopeSelector=".formidableHeader-logo"
          rules={{
            margin: "0 auto !important"
          }}
        />
          <div className="default">
            <RadiumLink destination="internal" href="/docs" theme="none">
              Docs
            </RadiumLink>
            <RadiumLink destination="external" href="https://github.com/FormidableLabs/radium/issues" theme="none">
              Issues
            </RadiumLink>
            <RadiumLink destination="external" href="https://github.com/FormidableLabs/radium" theme="none">
              View Source on GitHub
            </RadiumLink>
          </div>
        </Header>
        <Hero />
        <section id="whyRadium" style={styles.content}>
          <section style={styles.contentBlock}>
            <h1 style={[styles.displayCopy, { textAlign: "center" }]}>Why Radium</h1>
            <p style={styles.copy}>Radium unlocks the power of React & inline styling by enabling support for CSS pseudo selectors, media queries, vendor-prefixing, and much more through a simple interface.</p>
            <Demo src={require("!!raw!./demos/familiar.md")} />
          </section>
          <section style={styles.contentBlock}>
            <h3 style={styles.displayCopy}>Radium Features & Functionality</h3>
            <ul style={styles.listStyles}>
              <li>Conceptually simple extension of normal inline styles</li>
              <li>Browser state styles to support :hover, :focus, and :active Media   queries</li>
              <li>Automatic vendor prefixing</li>
              <li>Keyframes animation helper</li>
              <li>ES6 class and createClass support</li>
            </ul>
          </section>
          <section style={styles.contentBlock}>
            <h3 style={styles.displayCopy}>Advantages of Inline Styles</h3>
            <p style={styles.copy}>Eliminating CSS in favor of inline styles that are computed on the fly is a powerful approach, providing a number of benefits over traditional CSS:</p>
            <ul style={styles.listStyles}>
              <li>Scoped styles without selectors</li>
              <li>Avoids specificity conflicts</li>
              <li>Source order independence</li>
              <li>Dead code elimination</li>
              <li>Highly expressive</li>
            </ul>
            <p style={styles.copy}>To learn more about CSS in JS and the inspirations behind this library, check out <RadiumLink href="https://speakerdeck.com/vjeux/react-css-in-js">React: CSS in JS</RadiumLink> by <RadiumLink href="https://twitter.com/Vjeux">vjeux</RadiumLink></p>
          </section>
          <section style={styles.contentBlock}>
            <h3 style={styles.displayCopy}>Getting Started with Radium</h3>
            <p style={styles.copy}>To install the stable version of Radium:</p>
            <p><code>npm install --save radium</code></p>
            <p style={styles.copy}>This assumes you are using npm as your package manager. If you don’t, you can <RadiumLink href="https://npmcdn.com/radium/">access these files on npmcdn</RadiumLink> or point your package manager to them.</p>

            <p style={styles.copy}>Next, wrap <code>Radium()</code> around your component, like <code>module.exports = Radium(Component)</code>, or <code>Component = Radium(Component)</code>, which works with classes, createClass, and stateless components (functions that take props and return a ReactElement).</p>

            <p style={styles.copy}>Then, write a style object as you normally would with inline styles, and add in styles for interactive states and media queries. Pass the style object to your component via <code>{`style={...}`}</code> and let Radium do the rest!</p>
            <Demo noInline src={require("!!raw!./demos/gettingStarted.md")} />
          </section>
        </section>
        <section id="docs" style={[styles.content, styles.documentationCTA]}>
          <h2 style={styles.displayCopy}>Documentation</h2>
          <p style={styles.copy}>Find guides, explore examples, and reference our API documentation.</p>
          <RadiumButton styleOverrides={{marginTop: "1.25rem"}} size="large">
            <RadiumLink destination="internal" href="/docs" theme="onDark">
              View Radium Docs
            </RadiumLink>
          </RadiumButton>
        </section>
        <Footer
          containerStyle={styles.commonHeadsFoots}
          style={{margin: 0}}
          trademark={trademark}
        />
      </main>
    );
  }
}

export default Radium(Home);
