import React from "react";
import Radium from "radium";
import RadLink from "../../../components/hyperlink";
import theme from "../../../radium-theme";
import RADLOGO from "../../../../static/logo.svg";

class Sidebar extends React.Component {
  getStyles() {
    return {
      logo: {
        fill: theme.black
      }
    };
  }
  render() {
    const styles = this.getStyles();
    return (
      <aside>
        <header>
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

export default Radium(Sidebar);
