import React from "react";
import Radium from "radium";

class Docs extends React.Component {
  render() {
    return (
      <section style={this.props.layoutStyles}>
        <span>Docs Modules Go Here</span>
      </section>
    );
  }
}

Docs.propTypes = {
  layoutStyles: React.PropTypes.object
};

export default Radium(Docs);
