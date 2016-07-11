import React from "react";
import Radium from "radium";
import Sidebar from "./components/sidebar";
import Documentation from "./components/docs";

class Docs extends React.Component {
  getStyles() {
    return {
      main: {
        height: "100%",
        display: "flex",
        flexFlow: "row nowrap"
      },
      sidebar: {
        height: "100%",
        display: "flex",
        flex: "0 0 240px",
        flexDirection: "column"
      },
      documentation: {
        flex: "1 1 auto"
      }
    };
  }
  render() {
    const styles = this.getStyles();
    return (
      <main style={styles.main}>
        <Sidebar layoutStyles={styles.sidebar}/>
        <Documentation layoutStyles={styles.documentation}/>
      </main>
    );
  }
}

export default Radium(Docs);
