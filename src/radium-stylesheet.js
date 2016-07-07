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
      },
      ".Ecology": {
        fontSize: "1.3125rem"
      },
      ".Ecology .highlight": {
        margin: "36px -24px"
      },
      ".Ecology .highlight pre": {
        padding: 24
      }
    }
  },
  ".Ecology a": {
    borderBottomWidth: "1px",
    borderBottomStyle: "solid",
    borderBottomColor: settings.red,
    color: settings.red,
    fontWeight: 700,
    lineHeight: 1,
    textDecoration: "none",
    transition: "all 0.195s ease-in"
  },
  ".Ecology a:hover, .Ecology a:focus": {
    borderBottomColor: settings.black,
    color: settings.black,
    transition: "all 0.225s ease-out"
  },
  ".Ecology .highlight": {
    marginLeft: -16,
    marginRight: -16
  },
  ".Ecology pre": {
    backgroundColor: settings.lighterGray,
    fontFamily: settings.code
  },
  ".Ecology .highlight pre": {
    marginBottom: 0,
    background: settings.darkCharcoal,
    color: settings.white,
    fontFamily: settings.code,
    fontSize: 16,
    lineHeight: 1.2,
    overflow: "auto",
    padding: 16
  },
  ".Ecology ul": {
    paddingLeft: 24,
    listStyle: "none"
  },
  ".Ecology ul > li": {
    position: "relative"
  },
  ".Ecology ul > li + li": {
    marginTop: 10
  },
  ".Ecology ul > li:before": {
    content: "\"\"",
    width: "1em",
    height: "1em",
    display: "block",
    position: "absolute",
    fontSize: 8,
    borderRadius: "50%",
    border: `1px solid ${settings.red}`,
    left: -24,
    top: 11
  },
  ".Ecology li > ul": {
    marginTop: 10,
    marginBottom: 0
  },
  ".Ecology code": {
    fontFamily: settings.monospace,
    background: "#eee",
    padding: "0 3px"
  },
  ".Ecology pre code": {
    background: "transparent"
  },
  ".highlight code": {
    background: "transparent",
    padding: 0
  }
};
