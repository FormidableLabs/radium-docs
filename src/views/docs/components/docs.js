import React from "react";
import ReactDOM from "react-dom";
import Radium from "radium";
import theme from "../../../radium-theme";
import Ecology from "ecology";
import RADLOGO from "../../../../static/logo-dark.svg";
import Prism from "prismjs";
/* eslint-disable no-unused-vars */
// add more language support
import jsx from "prismjs/components/prism-jsx";
import sh from "prismjs/components/prism-bash";
import yaml from "prismjs/components/prism-yaml";
/* eslint-enable no-unused-vars */


import { Footer } from "formidable-landers";

class Docs extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }

  componentDidUpdate(prevProps) {
    // Page-change occured
    if (prevProps.docs !== this.props.docs) {
      this.refs.docContainer.scrollTop = 0;
      Prism.highlightAll();
    }
  }

  getStyles() {
    const headerHeight = `50px`;
    return {
      header: {
        display: "flex",
        justifyContent: "space-between",
        flex: `1 0 ${headerHeight}`,
        padding: `${theme.gutter / 2}px`,
        borderBottom: `1px solid ${theme.lighterGray}`,
        button: {
          border: "none",
          background: "transparent",
          fontFamily: theme.monospace,
          fontSize: "14px",
          color: theme.lightgray,
          transition: "color 250ms ease, border-color 250ms ease",
          ":hover": {
            color: theme.charcoal
          },
          ":focus": {
            color: theme.charcoal
          }
        },
        logo: {
          display: "block",
          height: "30px",
          width: "30px"
        }
      },
      container: {
        display: "flex",
        flexDirection: "column",
        padding: `0px`
      },
      documentContainer: {
        overflowY: "scroll",
        height: `calc(100vh - ${headerHeight})`
      },
      footer: {
        borderTop: `1px solid ${theme.lighterGray}`
      },
      footerLink: {
        color: theme.red,
        cursor: "pointer",
        display: "inline",
        transition: "color 0.195s ease-in",
        textDecoration: "none",
        ":hover": {
          color: theme.black,
          transition: "color 0.225s ease-out"
        }
      }
    };
  }

  render() {
    const styles = this.getStyles();
    return (
      <section style={[styles.container, this.props.layoutStyles]}>
        <header style={styles.header}>
          <button style={styles.header.button} onClick={this.props.handleMenuToggle}>Menu</button>
          <div style={styles.header.logo} dangerouslySetInnerHTML={{__html: RADLOGO}} />
        </header>
        <section
          style={styles.documentContainer}
          ref="docContainer"
          className="DocumentContainer"
        >
          <Ecology
            overview={this.props.docs}
            scope={{React, ReactDOM, Radium}}
            playgroundtheme="elegant"
          />
          <Footer
            background={theme.lighterGray}
            logoColor="black"
            linkStyles={styles.footerLink}
            styleOverrides={styles.footer}
          >
            <p style={{marginTop: "1em", fontSize: "14px"}}>Radium is a trademark of Formidable Labs, Inc.</p>
          </Footer>
        </section>
      </section>
    );
  }
}

Docs.propTypes = {
  layoutStyles: React.PropTypes.object,
  docs: React.PropTypes.string.isRequired,
  handleMenuToggle: React.PropTypes.func
};

export default Radium(Docs);
