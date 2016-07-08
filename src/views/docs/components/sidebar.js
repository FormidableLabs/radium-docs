import React from "react";
import Radium from "radium";
import RadLink from "../../../components/hyperlink";
import theme from "../../../radium-theme";
import RADLOGO from "../../../../static/logo.svg";

class Sidebar extends React.Component {
  getStyles() {
    return {
      container: {
        background: theme.charcoal
      },
      logo: {
        flex: "0 1 160px",
        margin: "0 auto"
      }
    };
  }
  render() {
    const styles = this.getStyles();
    return (
      <aside style={[styles.container, this.props.layoutStyles]}>
        <header style={{display: "flex", flexWrap: "wrap"}}>
          <div style={styles.logo} dangerouslySetInnerHTML={{__html: RADLOGO}} />
          <h1>Radium</h1>
          <h3>Subheading here</h3>
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
        <footer>
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
