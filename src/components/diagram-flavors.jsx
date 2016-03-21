import React from "react";
import Radium from "radium";
import {Grid, Cell} from "radium-grid";

import settings from "../builder-variables";

class Diagram extends React.Component {
  getDiagramStyles() {
    return {
      margin: "0 auto",
      padding: "0 16px",
      maxWidth: "960px",

      [settings.mediaQueries.large]: {
        padding: "0 36px",
        maxWidth: "1260px"
      }
    };
  }

  getRepoLayoutStyles() {
    return {
      margin: "5em -36px"
    };
  }

  getRepoStyles(skewDegrees, bg) {
    return {
      wrapper: {
        padding: "3em 2em",
        width: "100%",
        background: bg,
        color: settings.darkGray,
        margin: "0.25em 1.5em",

        [settings.mediaQueries.large]: {
          margin: "1em 0 2em 0",
          transform: `skewY(${skewDegrees})`
        }
      },
      content: {
        fontFamily: settings.monospace,
        fontSize: ".777777rem",
        transform: "initial",

        [settings.mediaQueries.large]: {
          transform: `skewY(-${skewDegrees})`
        }
      }
    };
  }

  getRepoHeadingStyles() {
    return {
      margin: "0 0 0.3em 0",

      fontWeight: "600",
      fontFamily: settings.monospace,
      fontSize: "1.25rem",
      lineHeight: "1.2",
      verticalAlign: "middle"
    };
  }

  getRepoListStyles() {
    return {
      margin: "0 0 0 20px",
      display: "inline-block",

      textAlign: "left"
    };
  }

  getFlavorArchetypeStyles() {
    return {
      zIndex: "1",

      backgroundColor: settings.gray,
      color: settings.darkerJet,
      fontFamily: settings.monospace,
      fontSize: ".777777rem",
      textAlign: "center",
      padding: "2em 1em",
      display: "block",
      width: "100%",
      clipPath: "polygon(0 0, 100% 0, 90% 100%, 10% 100%)",
      margin: "-0.5em 2em",

      [settings.mediaQueries.large]: {
        margin: "-5em auto 2em"
      }
    };
  }

  renderFlavorName(flavor) {
    return (
      <p style={this.getRepoHeadingStyles()}>
        <i className="octicon octicon-repo"></i> {flavor}
      </p>
    );
  }

  renderFlavorsList() {
    return (
      <ul style={this.getRepoListStyles()}>
        <li>.babelrc</li>
        <li>.eslintrc-base</li>
        <li>.eslintrc-client</li>
        <li>.eslintrc-client-test</li>
        <li>.eslintrc-server</li>
        <li>webpack.config.coverage.js</li>
        <li>webpack.config.dev.js</li>
        <li>webpack.config.js</li>
        <li>webpack.config.test.js</li>
      </ul>
    );
  }

  renderBuilderList() {
    return (
      <ul style={this.getRepoListStyles()}>
        <li>.builderrc</li>
      </ul>
    );
  }

  renderFlavorArchetype() {
    return (
      <div style={this.getFlavorArchetypeStyles()}>
        {this.renderFlavorName("flavor-archetype")}
        {this.renderFlavorsList()}
      </div>
    );
  }

  render() {
    const firstRepoStyles = this.getRepoStyles("9deg", `linear-gradient(-90deg, #eee, ${settings.white})`);
    const secondRepoStyles = this.getRepoStyles("171deg", settings.white);
    const thirdRepoStyles = this.getRepoStyles("9deg", `linear-gradient(90deg, #eee, ${settings.white})`);

    return (
      <div style={this.getDiagramStyles()}>
        <Grid
          cellWidth="1/3"
          gutter="0px"
          mediumCellWidth="1"
          smallCellWidth="1"
          style={this.getRepoLayoutStyles()}
          breakpoints={settings.mediaQueries}
        >
          <Cell>
            <div style={firstRepoStyles.wrapper}>
              <div style={firstRepoStyles.content}>
                {this.renderFlavorName("strawberry")}
                {this.props.archetype ? this.renderBuilderList() : this.renderFlavorsList()}
              </div>
            </div>
          </Cell>
          <Cell>
            <div style={secondRepoStyles.wrapper}>
              <div style={secondRepoStyles.content}>
                {this.renderFlavorName("blueberry")}
                {this.props.archetype ? this.renderBuilderList() : this.renderFlavorsList()}
              </div>
            </div>
          </Cell>
          <Cell>
            <div style={thirdRepoStyles.wrapper}>
              <div style={thirdRepoStyles.content}>
                {this.renderFlavorName("chocolate")}
                {this.props.archetype ? this.renderBuilderList() : this.renderFlavorsList()}
              </div>
            </div>
          </Cell>
          <Cell width="1">
            {this.props.archetype ? this.renderFlavorArchetype() : null}
          </Cell>
        </Grid>
      </div>
    );
  }
}

Diagram.propTypes = {
  archetype: React.PropTypes.bool
};

Diagram.defaultProps = {
  archetype: false
};

export default Radium(Diagram);
