import React from "react";
import ReactDOM from "react-dom";
import Radium from "radium";
import Ecology from "ecology";

// Settings
import theme from "../../../radium-theme";

class Demo extends React.Component {
  getStyles() {
    return {
      container: {
        marginTop: `${theme.gutter}px`
      }
    };
  }

  render() {
    const styles = this.getStyles();
    return (
      <div style={[this.props.style, styles.container]}>
        <Ecology
          overview={this.props.src}
          scope={{React, ReactDOM, Radium}}
          playgroundtheme="elegant"
        />
      </div>
    );
  }
}

Demo.propTypes = {
  src: React.PropTypes.string,
  style: React.PropTypes.object
};

Demo.defaultProps = {
  style: null
};

export default Radium(Demo);
