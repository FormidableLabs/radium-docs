import React from "react";
import Radium from "radium";
import Sidebar from "./components/sidebar";
import Documentation from "./components/docs";
import { find } from "lodash";
import { documents } from "./components/radium-files";

import { Header } from "formidable-landers";

class Docs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      docsComponent: null,
      menuOpen: true
    };
    this.toggleMenuOnResize = this.toggleMenuOnResize.bind(this);
  }

  componentWillMount() {
    // Check for window, check window size, and add event listener
    if (typeof window !== "undefined" && window.__STATIC_GENERATOR !== true) {
      this.toggleMenuOnResize();
      window.addEventListener("resize", this.toggleMenuOnResize);
    }
    this.setState({
      docsComponent: find(documents, {
        slug: this.props.params.document || "getting-started"
      })
    });
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      docsComponent: find(documents, {
        slug: newProps.params.document
      })
    });
  }

  componentWillUnmount() {
    // Remove event listener
    if (typeof window !== "undefined" && window.__STATIC_GENERATOR !== true) {
      window.removeEventListener("resize", this.toggleMenuOnResize);
    }
  }

  getChildContext() {
    return { location: this.props.location };
  }

  toggleMenuOnResize() {
    const breakpoint = 945;
    if (window.matchMedia(`(max-width: ${breakpoint}px)`).matches && this.state.menuOpen) {
      this.setState({ menuOpen: false });
    }
    if (window.matchMedia(`(min-width: ${breakpoint + 1}px)`).matches && !this.state.menuOpen) {
      this.setState({ menuOpen: true });
    }
  }

  toggleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  getStyles() {
    const sidebarWidth = 230;
    const transition = "300ms ease";
    const transform = this.state.menuOpen ? "0px" : `${sidebarWidth * -1}px`;

    return {
      main: {
        height: "100%",
        display: "flex",
        flexFlow: "row nowrap"
      },
      documentation: {
        zIndex: 2,
        boxShadow: "-3px -3px 10px rgba(0,0,0,.5)",
        flex: "1 1 auto",
        marginLeft: transform,
        width: "100%",
        transition: `all ${transition}`
      },
      sidebar: {
        zIndex: 1,
        height: "100%",
        display: "flex",
        flex: `0 0 ${sidebarWidth}px`,
        flexDirection: "column",
        transform: `translateX(${transform})`,
        transition: `all ${transition}`
      }
    };
  }

  render() {
    const styles = this.getStyles();
    return (
      <div
        style={{display: "flex", flexDirection: "column", height: "100%"}}
      >
        <Header padding="1.5rem 1rem">
          <div className="default">
            <a href="/docs">Docs</a>
            <a href="//github.com/FormidableLabs/radium/issues">Issues</a>
            <a href="//github.com/FormidableLabs/radium">View Source on GitHub</a>
          </div>
        </Header>
        <main style={styles.main}>
          <Sidebar
            layoutStyles={styles.sidebar}
            currentDocument={this.props.params.document || "getting-started"}
          />
          <Documentation
            layoutStyles={styles.documentation}
            docs={this.state.docsComponent.docs}
            handleMenuToggle={this.toggleMenu.bind(this)}
          />
        </main>
      </div>
    );
  }
}

Docs.propTypes = {
  params: React.PropTypes.object.isRequired,
  location: React.PropTypes.object.isRequired
};

Docs.childContextTypes = {
  location: React.PropTypes.object
};

export default Radium(Docs);
