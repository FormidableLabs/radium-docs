import React from "react";
import Radium from "radium";
import Sidebar from "./components/sidebar";
import Documentation from "./components/docs";
import { find } from "lodash";
import { documents } from "./components/radium-files";

class Docs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { docsComponent: null };
  }

  componentWillMount() {
    const docsObj = find(documents, {slug: this.props.params.component});
    this.setState({docs: docsObj});
  }

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
        <Sidebar
          layoutStyles={styles.sidebar}
          currentRoute={this.props.params.component}
        />
        <Documentation
          layoutStyles={styles.documentation}
          docs={this.state.docs.docs}
        />
      </main>
    );
  }
}

Docs.propTypes = {
  params: React.PropTypes.object.isRequired
};

export default Radium(Docs);
