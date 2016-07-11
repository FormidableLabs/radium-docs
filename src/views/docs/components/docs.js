import React from "react";
import ReactDOM from "react-dom";
import Radium from "radium";
import theme from "../../../radium-theme";
import Ecology from "ecology";

class Docs extends React.Component {
  componentDidUpdate() {
    this.refs.docsContainer.scrollTop = 0;
  }

  getStyles() {
    return {
      container: {
        padding: `${theme.gutter}px`,
        overflowY: "scroll"
      }
    };
  }

  render() {
    const styles = this.getStyles();
    return (
      <section ref="docsContainer" style={[styles.container, this.props.layoutStyles]}>
        <Ecology
          overview={this.props.docs}
          scope={{React, ReactDOM, Radium}}
          playgroundtheme="elegant"
        />
      </section>
    );
  }
}

Docs.propTypes = {
  layoutStyles: React.PropTypes.object,
  docs: React.PropTypes.string.isRequired
};

export default Radium(Docs);
