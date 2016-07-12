import React from "react";
import Radium from "radium";
import theme from "../../../radium-theme";
import RadiumLink from "../../../components/hyperlink";
import marked from "marked";
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
        background: "#fefefe",
        button: {
          border: "none",
          background: "transparent",
          fontFamily: theme.monospace,
          fontSize: "14px",
          color: theme.lightgray,
          transition: "color 225ms ease-out , border-color 225ms ease-out",
          cursor: "pointer",
          userSelect: "none",
          outline: "none",
          ":hover": {
            color: theme.red,
            transition: "color 195ms ease-in , border-color 195ms ease-in"
          },
          ":focus": {
            color: theme.red
          }
        },
        logo: {
          display: "block",
          height: "30px",
          width: "30px",
          cursor: "pointer",
          ":hover": {
            background: theme.lighterGray
          }
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
        transition: "color 195ms ease-in",
        textDecoration: "none",
        ":hover": {
          color: theme.black,
          transition: "color 225ms ease-out"
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
          <RadiumLink href="/" destination="internal">
            <div
              style={styles.header.logo}
              dangerouslySetInnerHTML={{__html: RADLOGO}}
            />
          </RadiumLink>
        </header>
        <section
          style={styles.documentContainer}
          ref="docContainer"
          className="DocumentContainer"
        >
          <div className="Documentation" dangerouslySetInnerHTML={{__html: marked(this.props.docs)}} />
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
