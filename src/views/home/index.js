import React from "react";
import Radium from "radium";
import Hero from "./components/hero";
import Demo from "./components/demo";

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
          </section>
          <section style={styles.contentBlock}>
            <h3 style={[styles.displayCopy, { textAlign: "center" }]}>Familiar Styling</h3>
            <Demo src={require("!!raw!./demos/familiar.md")} />
          </section>
          <section style={styles.contentBlock}>
            <h3 style={[styles.displayCopy, { textAlign: "center" }]}>Psuedo & Browser State Selectors</h3>
            <p style={styles.copy}>Media queries..</p>
          </section>
          <section style={styles.contentBlock}>
            <h3 style={[styles.displayCopy, { textAlign: "center" }]}>Using Radium</h3>
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
