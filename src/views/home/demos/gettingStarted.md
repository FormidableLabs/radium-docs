
// import React from 'react';
// import ReactDOM from 'react-dom';
// import Radium from 'radium';

class Alert extends React.Component {
  getStyles() {
    const status = {
      notification: "#0074D9",
      success: "#27AE60",
      error: "#E74C3C"
    }

    return {
      alert: {
        position: "relative",
        width: "100%",
        padding: "5px",
        borderRadius: "3px",
        backgroundColor: status.notification,
        color: "white",
        textAlign: "center",
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

render(<Component message="This is an alert component" />);

