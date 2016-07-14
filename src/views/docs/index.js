import React from "react";
import Radium from "radium";
import Sidebar from "./components/sidebar";
import Documentation from "./components/docs";
import { find } from "lodash";
import { documents } from "./components/radium-files";

class Docs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      docsComponent: null,
      menuOpen: true
    };
    this.collapseMenuForSmallerScreens = this.collapseMenuForSmallerScreens.bind(this);
  }

  componentWillMount() {
    // Check for window, check window size, and add event listener
    if (typeof window !== "undefined" && window.__STATIC_GENERATOR !== true) {
      this.collapseMenuForSmallerScreens();
      window.addEventListener("resize", this.collapseMenuForSmallerScreens);
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
      window.removeEventListener("resize", this.collapseMenuForSmallerScreens);
    }
  }

  collapseMenuForSmallerScreens() {
    const breakpoint = "945px";
    if (window.matchMedia(`(max-width: ${breakpoint})`).matches && this.state.menuOpen) {
      this.setState({ menuOpen: false });
    }
  }

  toggleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  getStyles() {
    const sidebarWidth = 230;
    const transition = "300ms ease";

    return {
      main: {
        height: "100%",
        display: "flex",
        flexFlow: "row nowrap"
      },
      documentation: {
        zIndex: 2,
        boxShadow: "-3px -3px 10px rgba(0,0,0,.5)",
        position: this.state.menuOpen ? "relative" : "absolute",
        flex: "1 1 auto",
        transform: `translateX(${this.state.menuOpen ? "0px" : `-${sidebarWidth}px`})`,
        width: "100%",
        transition: `all ${transition}`
      },
      sidebar: {
        zIndex: 1,
        height: "100%",
        display: "flex",
        flex: `0 0 ${sidebarWidth}px`,
        flexDirection: "column",
        transform: `translateX(${this.state.menuOpen ? "0px" : `-${sidebarWidth}px`})`,
        transition: `all ${transition}`
      }
    };
  }

  render() {
    const styles = this.getStyles();
    return (
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
    );
  }
}

Docs.propTypes = {
  params: React.PropTypes.object.isRequired
};

export default Radium(Docs);
