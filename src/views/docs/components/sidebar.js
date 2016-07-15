import React from "react";
import Radium from "radium";
import RadLink from "../../../components/hyperlink";
import theme from "../../../radium-theme";

class Sidebar extends React.Component {
  getStyles() {
    return {
      container: {
        padding: `${theme.gutter / 2}px`,
        backgroundColor: "#050505",
        backgroundImage: "url(./static/bg-radium.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "bottom left"
      },
      header: {
        display: "flex",
        flexWrap: "wrap"
      },
      heading: {
        color: theme.lighterGray,
        fontFamily: theme.sansSerif,
        width: "100%",
        marginTop: "10px",
        WebkitFontSmoothing: "antialiased"
      },
      subHeading: {
        marginTop: "10px",
        color: theme.lighterGray,
        fontFamily: theme.monospace,
        fontSize: ".8rem"
      },
      menu: {
        padding: "0px",
        listStyle: "none",
        fontFamily: theme.monospace
      },
      menuLi: {
        fontSize: "1rem",
        WebkitFontSmoothing: "antialiased"
      },
      footer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        flex: "1",
        padding: "0",
        fontSize: "14px",
        fontFamily: theme.monospace
      }
    };
  }

  getLinkStyles(slug) {
    const linkColor = this.props.currentDocument === slug ?
      theme.white
      : theme.lightGray;

    return {
      color: linkColor,
      ":hover": {
        color: theme.white
      }
    };
  }

  render() {
    const styles = this.getStyles();
    return (
      <aside style={[styles.container, this.props.layoutStyles]}>
        <header style={styles.header}>
          <h2 style={styles.heading}>Radium</h2>
          <span style={styles.subHeading}>Radium is a set of tools to manage inline styles on React elements. It gives you powerful styling capabilities without CSS.</span>
        </header>
        <ul role="menu" style={styles.menu}>
        <li style={styles.menuLi}>
          <RadLink
            href="/"
            destination="internal"
            style={this.getLinkStyles("/")}
          >
            Radium Home
          </RadLink>
        </li>
          <li style={styles.menuLi}>
            <RadLink
              href="/docs/getting-started"
              destination="internal"
              style={this.getLinkStyles("getting-started")}
            >
              Getting Started
            </RadLink>
          </li>
          <li style={styles.menuLi}>
            <RadLink
              href="/docs/guide"
              destination="internal"
              style={this.getLinkStyles("guide")}
            >
              Using Radium
            </RadLink>
          </li>
          <li style={styles.menuLi}>
            <RadLink
              href="/docs/api"
              destination="internal"
              style={this.getLinkStyles("api")}
            >
              API Docs
            </RadLink>
          </li>
          <li style={styles.menuLi}>
            <RadLink
              href="/docs/faq"
              destination="internal"
              style={this.getLinkStyles("faq")}
            >
              Radium FAQ
            </RadLink>
          </li>
        </ul>
      </aside>
    );
  }
}

Sidebar.propTypes = {
  layoutStyles: React.PropTypes.object,
  currentDocument: React.PropTypes.string.isRequired
};

export default Radium(Sidebar);
