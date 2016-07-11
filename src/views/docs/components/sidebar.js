import React from "react";
import Radium from "radium";
import RadLink from "../../../components/hyperlink";
import theme from "../../../radium-theme";
import RADLOGO from "../../../../static/logo.svg";

class Sidebar extends React.Component {
  getStyles() {
    return {
      container: {
        background: theme.lightCharcoal,
        padding: `${theme.gutter / 2}px`
      },
      logo: {
        flex: "0 1 140px"
      },
      heading: {
        color: theme.white,
        fontFamily: theme.sansSerif,
        width: "100%",
        marginTop: "10px",
        WebkitFontSmoothing: "antialiased"
      },
      subHeading: {
        marginTop: "10px",
        color: theme.white,
        fontFamily: theme.monospace,
        fontSize: ".8rem"
      }
    };
  }
  render() {
    const styles = this.getStyles();
    return (
      <aside style={[styles.container, this.props.layoutStyles]}>
        <header style={{display: "flex", flexWrap: "wrap"}}>
          <div style={styles.logo} dangerouslySetInnerHTML={{__html: RADLOGO}} />
          <h2 style={styles.heading}>Radium</h2>
          <span style={styles.subHeading}>Radium is a set of tools to manage inline styles on React elements. It gives you powerful styling capabilities without CSS.</span>
        </header>
        <ul role="menu">
          <li>
            <RadLink href="#" destination="internal">
              Menu Item
            </RadLink>
          </li>
          <li>
            <RadLink href="#" destination="internal">
              Menu Item 2
            </RadLink>
          </li>
        </ul>
        <footer style={{flex: "1"}}>
          Footer stuff here
        </footer>
      </aside>
    );
  }
}

Sidebar.propTypes = {
  layoutStyles: React.PropTypes.object
};

export default Radium(Sidebar);
