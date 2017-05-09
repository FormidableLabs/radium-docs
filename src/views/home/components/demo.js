import React from "react";
import ReactDOM from "react-dom";
import Radium from "radium";
import Button from "../demos/button";
import color from "color";
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from "react-live";

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
        <LiveProvider
          noInline={this.props.noInline}
          code={this.props.src}
          scope={{React, ReactDOM, Radium, Button, color}}
        >
          <LiveError />
          <LivePreview />
          <LiveEditor className="LiveEditor" />
        </LiveProvider>
      </div>
    );
  }
}

Demo.propTypes = {
  noInline: React.PropTypes.boolean,
  src: React.PropTypes.string,
  style: React.PropTypes.object
};

Demo.defaultProps = {
  noInline: false,
  style: null
};

export default Radium(Demo);
