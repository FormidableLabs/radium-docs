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
import settings from "../radium-variables";
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

  getFooterSkewStyles() {
    return {
      base: {
        position: "absolute",
        bottom: "45%",
        left: "0",
        right: "0",
        zIndex: "-1",
        height: "75%"
      },
      right: {
        background: `linear-gradient(0deg, ${settings.darkerJet}, ${settings.gray}, ${settings.white})`,
        clipPath: "polygon(100% 0, 0% 100%, 100% 100%)"
      },
      left: {
        background: `linear-gradient(0deg, ${settings.darkerJet}, transparent)`,
        clipPath: "polygon(0 0, 0% 100%, 100% 100%)"
      }
    };
  }

  render() {
    const footerStyles = this.getFooterSkewStyles();
    return (
      <StyleRoot>
        <Header backgroundColor={settings.darkerJet} linkStyles={this.getLightLinkStyles()} />
        <div style={this.getMainStyles()}>
          <section style={{position: "relative"}}>
            <div style={this.getBackgroundSkewStyles()}></div>
            <div className="Container">
              <h3 className="Headline Tagline">
                Simple multiproject management through composable npm task workflows.
              </h3>
              <div className="Copy Copy--Big">
                <p>
                  <code>npm</code> is great for controlling a single repository’s dependencies and tasks. But what if you need <strong>shared infrastructure and configuration across multiple repos</strong>?
                </p>
              </div>
            </div>
            <div className="Container">
              <div className="Copy Copy--Big">
                <p>
                  Builder is a meta tool for controlling npm workflows. If you’re working on multiple similar repos, it allows you to <strong>define tasks and dependencies in a single shared source of truth</strong>.
                </p>
              </div>
            </div>
            <div className="Container">
              <div className="Copy Copy--Big">
                <p>
                  Or, if you’re working in a single repo, it allows you to dramatically simplify your <code>package.json</code>. Either way, it keeps you close to vanilla npm—you don’t need to buy into a whole new build philosophy to start benefiting from builder today.
                </p>
              </div>
            </div>
          </section>
          <section className="Container">
            <div className="Copy Copy--Big">
              <h1 className="Headline">
                Archetypes 101
              </h1>
              <p>
                A builder “archetype” encapsulates shared configuration in a single source of truth. We’ve written archetypes for <OutboundLink to="https://github.com/FormidableLabs/builder-react-component" eventLabel="https://github.com/FormidableLabs/builder-react-component">React</OutboundLink> and <OutboundLink to="https://github.com/FormidableLabs/builder-victory-component" eventLabel="https://github.com/FormidableLabs/builder-victory-component">Victory</OutboundLink> components so far, and we’re actively writing more. You can define an archetype for <strong>any type of application or component</strong>, including Backbone, Angular, and Node.
              </p>
              <p>
                <a href="#archetypes">Learn more about archetypes</a>.
              </p>
            </div>
          </section>
          <section className="Container">
            <h1 id="docs" className="Headline">Documentation</h1>
            <Docs />
          </section>
        </div>
        <Footer
          backgroundColor={settings.white}
          logoColor="white"
          styleOverrides={{
            margin: "0",
            padding: "10vmax 0.5rem 3rem 0.5rem",
            position: "relative",
            zIndex: "0",
            color: settings.white,
            borderTop: "none",
            background: `linear-gradient(0deg, ${settings.darkerJet} 46%, ${settings.white} 46%)`
          }}
          linkStyles={this.getLightLinkStyles()}
        >
          <p>Builder is a trademark of Formidable Labs, Inc.</p>
          <div style={[footerStyles.base, footerStyles.right]} />
          <div style={[footerStyles.base, footerStyles.left]} />
        </Footer>
        <Style rules={theme} />
      </StyleRoot>
    );
  }
}

export default Radium(App);
