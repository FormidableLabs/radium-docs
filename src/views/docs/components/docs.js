import React from "react";
import ReactDOM from "react-dom";
import Radium from "radium";
import theme from "../../../radium-theme";
import Ecology from "ecology";

class Docs extends React.Component {
  getStyles() {
    return {
      container: {
        padding: `${theme.gutter}px`
      }
    };
  }

  render() {
    const styles = this.getStyles();
    return (
      <section style={[styles.container, this.props.layoutStyles]}>
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
