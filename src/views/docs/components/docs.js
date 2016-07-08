import React from "react";
import Radium from "radium";

import theme from "../../../radium-theme";

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
        <span>Docs Modules Go Here</span>
      </section>
    );
  }
}

Docs.propTypes = {
  layoutStyles: React.PropTypes.object
};

export default Radium(Docs);
