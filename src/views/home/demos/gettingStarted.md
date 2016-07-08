```playground_norender
// import React from 'react';
// import ReactDOM from 'react-dom';
// import Radium from 'radium';

class Alert extends React.Component {
  getStyles() {
    const status = {
      notification: "rgb(41, 128, 185)",
      success: "rgb(39, 174, 96)",
      error: "rgb(231, 76, 60)"
    }

    return {
      alert: {
        position: "relative",
        width: "100%",
        padding: "5px",
        backgroundColor: status.notification,
        color: "white",
        textAlign: "center",
        fontSize: "1rem",
        letterSpacing: ".04rem",
        borderRadius: "3px",
        fontFamily: "'Helvetica Neue', sans-serif",
        success: {
          backgroundColor: status.success
        },
        error: {
          backgroundColor: status.error
        }
      },
      closeButton: {
        position: "absolute",
        right: "10px",
        color: color(status[this.props.type]).lighten(0.2).hexString(),
        ":hover": {
          color: color(status[this.props.type]).lighten(0.5).hexString(),
          cursor: "pointer"
        }
      }
    };
  }
  render() {
    const styles = this.getStyles();
    const { type, message } = this.props;
    return (
      <div style={[styles.alert, styles.alert[type]]}>
        { message }
        <span style={styles.closeButton}>&#x2715;</span>
      </div>
    );
  }
}

Alert.defaultProps = { type: "notification" };

const Component = Radium(Alert);

ReactDOM.render(<Component message="This is an alert component" />, mountNode);

```
