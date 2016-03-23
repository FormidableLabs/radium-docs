import React from "react";
import Radium, { Style, StyleRoot } from "radium";
import ga from "react-ga";
const OutboundLink = ga.OutboundLink;

// Child components
// import Diagram from "./diagram-flavors";
import Docs from "./docs";
// import Hero from "./hero";
import { Header, Footer } from "formidable-landers";

// Variables
import settings from "../radium-settings";
import theme from "../radium-styles";

class App extends React.Component {
  componentDidMount() {
    ga.initialize("UA-43290258-1");
  }

  getLightLinkStyles() {
    return {
      color: "#fff"
    };
  }

  getBackgroundSkewStyles() {
    return {
      zIndex: "-1",
      position: "absolute",
      top: "0",
      left: "0",
      right: "0",
      height: "100%",
      transformOrigin: "top left",
      transform: "skew(0deg, -24deg)",
      background: `linear-gradient(0deg, ${settings.white}, ${settings.gray})`
    };
  }

  getMainStyles() {
    return {
      zIndex: "0",
      position: "relative",
      margin: "0",
      padding: "0 0 2em 0",
      width: "100%",
      background: settings.white
    };
  }

  render() {
    return (
      <StyleRoot>
        <Header backgroundColor={settings.darkerJet} linkStyles={this.getLightLinkStyles()} />
        <div style={this.getMainStyles()}>
          <section style={{position: "relative"}}>
            <div className="Container">
              <p>hello</p>
              <Docs/>
            </div>
          </section>
        </div>
        <Footer
          backgroundColor={settings.white}
          logoColor="white"
          linkStyles={this.getLightLinkStyles()}
        >
          <p>Builder is a trademark of Formidable Labs, Inc.</p>
        </Footer>
        <Style rules={theme} />
      </StyleRoot>
    );
  }
}

export default Radium(App);
