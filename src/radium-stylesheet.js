// -------------------------------
// RADIUM THEME
// -------------------------------
// Settings
import settings from "./radium-theme";

// For both akkurat & sharp sans no2 bold:
// MozOsxFontSmoothing: "grayscale",
// WebkitFontSmoothing: "antialiased"

// Stylesheet
export default {
  "*, *:before, *:after": {
    WebkitBoxSizing: "inherit",
    MozBoxSizing: "inherit",
    boxSizing: "inherit"
  },
  html: {
    backgroundColor: settings.black,
    msTextSizeAdjust: "100%",
    WebkitTextSizeAdjust: "100%"
  },
  body: {
    backgroundColor: settings.white,
    boxSizing: "border-box",
    color: settings.black,
    fontFamily: settings.serif,
    fontSize: "16px",
    lineHeight: 1.4,
    margin: 0
  },
  "html, body": {
    overflowX: "hidden"
  },
  "article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section, summary": {
    display: "block"
  },
  "h1, h2, h3, h4, h5, h6, hgroup, ul, ol, dd, p, figure, pre, table, fieldset, hr, .highlight": {
    marginTop: "1.25rem",
    marginBottom: 0
  },
  p: {
    fontSize: "1rem",
    lineHeight: 1.4
  },
  img: {
    maxWidth: "100%"
  },
  h1: {
    fontSize: "3rem"
  },
  h2: {
    fontSize: "2rem"
  },
  h3: {
    fontSize: "1.5rem"
  },
  h4: {
    fontSize: "1.3125rem"
  },
  svg: {
    fill: "currentColor"
  },
  "#a-react-component-styling-library, #radium": {
    display: "none"
  },
  mediaQueries: {
    [settings.mediaSizes.medium]: {
      p: {
        fontSize: "1.2rem",
        lineHeight: 1.4
      },
      "h1": {
        fontSize: "3.75rem"
      },
      "h2": {
        fontSize: "2.75rem"
      },
      "h3": {
        fontSize: "2rem"
      },
      "h4, h5, h6": {
        fontSize: "1.5rem"
      }
    }
  },
  ".Interactive .playground": {
    display: "flex"
  },
  ".playgroundCode": {
    order: "1",
    padding: "10px"
  },
  ".playgroundPreview": {
    order: "0",
    padding: "10px",
    background: "#333"
  }
};
