// -------------------------------
// RADIUM THEME
// -------------------------------
// theme
import theme from "./radium-theme";

// For both akkurat & sharp sans no2 bold:
// MozOsxFontSmoothing: "grayscale",
// WebkitFontSmoothing: "antialiased"

const codeStyles = {
  fontFamily: theme.code,
  fontSize: ".9em",
  lineHeight: 1.375,
  direction: "ltr",
  textAlign: "left",
  whiteSpace: "pre",
  wordSpacing: "normal",
  wordBreak: "normal",
  tabSize: 2,
  webkitHyphens: "none",
  mozHyphens: "none",
  msHyphens: "none",
  hyphens: "none",
  background: "transparent"
};

// Stylesheet
export default {
  "*, *:before, *:after": {
    boxSizing: "inherit"
  },
  html: {
    backgroundColor: theme.black,
    msTextSizeAdjust: "100%",
    WebkitTextSizeAdjust: "100%"
  },
  body: {
    backgroundColor: theme.white,
    boxSizing: "border-box",
    color: theme.black,
    fontFamily: theme.serif,
    margin: 0
  },
  "html, body": {
    overflowX: "hidden"
  },
  main: {
    fontSize: "16px",
    lineHeight: 1.4
  },
  "article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section, summary": {
    display: "block"
  },
  "h1, h2, h3, h4, h5, h6, hgroup, ul, ol, dd, p, figure, pre, table, fieldset, hr, .highlight": {
    marginTop: "1.25rem",
    marginBottom: 0
  },
  "ul ul": {
    marginTop: "0"
  },
  "h1, h2, h3, h4, h5, h6, hgroup": {
    fontFamily: theme.sansSerif,
    fontWeight: "normal"
  },
  p: {
    fontSize: "1rem",
    lineHeight: 1.5
  },
  "p > code, li > code, h1 > code, h2 > code, h3 > code, h4 > code, h5 > code, h6 > code": {
    padding: "0px 5px",
    paddingTop: "0.2em",
    paddingBottom: "0.2em",
    margin: "0px",
    fontSize: "85%",
    background: "rgba(0,0,0,0.05)",
    borderRadius: "3px"
  },
  li: {
    fontSize: "1rem",
    lineHeight: 1.8
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
    [theme.mediaSizes.medium]: {
      p: {
        fontSize: "1.2rem"
      },
      li: {
        fontSize: "1.2rem"
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
  /*
   * Markdown Styling
   * Viewable at /docs
  */
  ".Documentation": {
    maxWidth: "800px",
    margin: "0 auto",
    padding: `${theme.gutter}px ${theme.gutter}px ${theme.gutter * 2}px`,
    color: theme.charcoal
  },
  ".Documentation > h1": {
    marginTop: 0
  },
  ".Documentation pre": {
    padding: "16px",
    overflow: "auto",
    fontSize: ".9em",
    lineHeight: "1.45",
    backgroundColor: "#f5f5f5",
    borderRadius: "3px"
  },
  ".Documentation p": {
    fontFamily: theme.serif,
    MozOsxFontSmoothing: "grayscale",
    WebkitFontSmoothing: "antialiased"
  },
  ".Documentation a": {
    color: theme.red,
    cursor: "pointer",
    display: "inline",
    transition: "color 195ms ease-in",
    textDecoration: "none",
    ":hover": {
      color: theme.charcoal,
      transition: "color 225ms ease-out"
    }
  },
  ".Documentation li": {
    MozOsxFontSmoothing: "grayscale",
    WebkitFontSmoothing: "antialiased"
  },
  ".Documentation h1, .Documentation h2, .Documentation h3, .Documentation h4, .Documentation h5": {
    MozOsxFontSmoothing: "grayscale",
    WebkitFontSmoothing: "antialiased"
  },
  ".Documentation code[class*='language-'], .Documentation pre[class*='language-']": codeStyles,
  /**
   * ReactLive Theme/Color Palette
   */
  ".react-live-error": {
    background: theme.reactLive.red,
    color: theme.white,
    fontFamily: theme.monospace,
    fontSize: "1rem",
    fontWeight: "normal",
    lineHeight: 1.2,
    overflow: "scroll",
    padding: `${theme.gutter}px`,
    textAlign: "left",
    whiteSpace: "pre",
    width: "100%"
  },
  ".react-live-preview": {
    position: "relative",
    "text-align": "center",
    order: "0",
    padding: "40px 20px",
    background: "#eee",
    border: "1px solid #cecece"
  },
  ".prism-code.LiveEditor": {
    background: theme.reactLive.bg,
    boxSizing: "border-box",
    color: theme.white,
    fontSize: ".9em",
    height: "350px",
    margin: 0,
    overflow: "scroll",
    position: "relative",
    padding: "10px",
    transition: "background-color 195ms ease-in"
  },
  ".prism-code.LiveEditor:focus": {
    background: theme.reactLive.bgFocused,
    transition: "background 225ms ease-out"
  }
};
