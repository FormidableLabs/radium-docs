import Ecology from "ecology";
import React from "react";
import Prism from "prismjs";
/* eslint-disable no-unused-vars */
// add more language support
import jsx from "prismjs/components/prism-jsx";
import sh from "prismjs/components/prism-bash";
import yaml from "prismjs/components/prism-yaml";
import as from "prismjs/components/prism-actionscript";
/* eslint-enable no-unused-vars */

import radiumREADME from "radium/README.md";
import docsREADME from "../../README.md";

class Docs extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
    console.log(Prism.languages);
  }
  render() {
    return (
      <div>
        <Ecology overview={radiumREADME} />
        <Ecology overview={docsREADME} />
      </div>
    );
  }
}

export default Docs;
