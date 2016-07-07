import React from "react";
import Radium from "radium";
import Hero from "./components/hero";
import Demo from "./components/demo";
import RadiumLink from "../../components/hyperlink";

import theme from "../../radium-theme";

class Home extends React.Component {

  getStyles() {
    return {
      section: {
        paddingBottom: `${theme.gutter * 2}px`
      },
      content: {
        padding: `0px ${theme.gutter}px`
      },
      contentBlock: {
        margin: `${theme.gutter}px auto`,
        maxWidth: "720px"
      },
      displayCopy: {
        color: theme.charcoal,
        fontFamily: theme.sansSerif
      },
      copy: {
        color: theme.darkCharcoal,
        fontFamily: theme.serif
      }
    };
  }

  render() {
    const styles = this.getStyles();

    return (
      <section style={styles.section}>
        <Hero />
        <section id="whyRadium" style={styles.content}>
          <section style={styles.contentBlock}>
            <h1 style={[styles.displayCopy, { textAlign: "center" }]}>Why Radium</h1>
            <p style={styles.copy}>Radium unlocks the power of React & inline styling by enabling support for CSS psuedo selectors, media queries, vendor-prefixing, and much more through a simple interface.</p>
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
            <p>To learn more about CSS in JS and the inspirations behind this library, check out <RadiumLink href="https://speakerdeck.com/vjeux/react-css-in-js">React: CSS in JS</RadiumLink> by <RadiumLink href="https://twitter.com/Vjeux">vjeux</RadiumLink></p>
          </section>
          <section style={styles.contentBlock}>
            <h3 style={styles.displayCopy}>Getting Started with Radium</h3>
            <p style={styles.copy}>Using example..</p>
          </section>
        </section>
        <section id="docs" style={styles.content}>
          <p style={styles.copy}>Link to docs here..</p>
        </section>
      </section>
    );
  }
}

export default Radium(Home);
