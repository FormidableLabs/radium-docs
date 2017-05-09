import React from "react";
import Radium from "radium";
import theme from "../../../radium-theme";
import RadiumLink from "../../../components/hyperlink";
import RADLOGO from "../../../../static/logo-dark.svg";
import MarkdownIt from "markdown-it";
import markdownItNamedHeaders from "markdown-it-named-headers";
import { highlightAll } from "prismjs/components/prism-core";
import basename from "../../../basename";
/* eslint-disable no-unused-vars */
// add more language support
import jsx from "prismjs/components/prism-jsx";
import sh from "prismjs/components/prism-bash";
import yaml from "prismjs/components/prism-yaml";
/* eslint-enable no-unused-vars */

import { Footer } from "formidable-landers";

class Docs extends React.Component {
  componentDidMount() {
    highlightAll();
  }

  componentWillMount() {
    this.setMarkdownRenderer(this.context.location.pathname);
  }

  componentDidUpdate(prevProps) {
    // Page-change occured
    if (prevProps.docs !== this.props.docs) {
      this.refs.docContainer.scrollTop = 0;
      highlightAll();
    }
  }

  componentWillUpdate(nextProps, nextState, nextContext) {
    // Pathname has changed
    if (nextContext.location.pathname !== this.context.location.pathname) {
      this.setMarkdownRenderer(nextContext.location.pathname);
    }
  }

  /* eslint-disable camelcase, max-params */
  // Create a markdown renderer that builds relative links
  // based on the currentPath and site's base href
  setMarkdownRenderer(currentPath) {
    const md = new MarkdownIt({ html: true });
    md.use(markdownItNamedHeaders);

    // store the original rule
    const defaultRender = md.renderer.rules.link_open || function (tokens, idx, options, env, renderer) {
      return renderer.renderToken(tokens, idx, options);
    };

    // Update anchor links to include the basename
    md.renderer.rules.link_open = function (tokens, idx, options, env, renderer) {
      const aIndex = tokens[idx].attrIndex("href");
      if (aIndex >= 0) {
        const href = tokens[idx].attrs[aIndex][1];
        if (href.indexOf("#") === 0) {
          tokens[idx].attrs[aIndex][1] = `${basename}${currentPath}${href}`;
        }
      }
      return defaultRender(tokens, idx, options, env, renderer);
    };

    this.md = md;
  }
  /* eslint-enable camelcase, max-params */

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
    const trademark = <div className="default">Radium&reg; is a trademark of Formidable Labs, Inc.</div>;
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
          <div className="Documentation" dangerouslySetInnerHTML={{__html: this.md.render(this.props.docs)}} />
          <Footer
            theme="light"
            containerStyle={{
              margin: "0 auto",
              padding: `5rem ${theme.gutter}px 6rem`,
              maxWidth: "800px"
            }}
            style={{
              borderTop: `1px solid rgb(238, 238, 238)`
            }}
            trademark={trademark}
          />
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

Docs.contextTypes = {
  location: React.PropTypes.object.isRequired
};

export default Radium(Docs);
