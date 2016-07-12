// -------------------------------
// RADIUM THEME
// -------------------------------
// theme
import theme from "./radium-theme";

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
    backgroundColor: theme.black,
    msTextSizeAdjust: "100%",
    WebkitTextSizeAdjust: "100%"
  },
  body: {
    backgroundColor: theme.white,
    boxSizing: "border-box",
    color: theme.black,
    fontFamily: theme.serif,
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
  "ul ul": {
    marginTop: "0"
  },
  "h1, h2, h3, h4, h5, h6, hgroup": {
    fontFamily: theme.sansSerif
  },
  p: {
    fontSize: "1rem",
    lineHeight: 1.4
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
  ".Documentation > div > h1": {
    marginTop: 0
  },
  ".Documentation a": {
    color: theme.red,
    ":hover": {
      color: theme.charcoal
    }
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
  ".Documentation li": {
    MozOsxFontSmoothing: "grayscale",
    WebkitFontSmoothing: "antialiased"
  },
  ".Documentation h1, .Documentation h2, .Documentation h3, .Documentation h4, .Documentation h5": {
    MozOsxFontSmoothing: "grayscale",
    WebkitFontSmoothing: "antialiased"
  },
  /*
   * Interactive/Component Playground
   * .Interactive
   * |- .playground
   *    |- .playgroundCode
   *    |  |- .playgroundStage
   *    |- .playgroundPreview
   *       |- div
   *          |- .playgroundError
   *          |- .previewArea
   */
  ".Interactive .playground": {
    display: "flex",
    flexDirection: "column",
    padding: 0
  },
  ".Interactive .playgroundCode": {
    order: "1",
    padding: 0,
    margin: 0
  },
  ".playgroundCode .playgroundStage": {
    position: "relative",
    boxSizing: "border-box",
    padding: "10px",
    margin: 0
  },
  ".Interactive .playgroundStage:after": {
    content: "EDITOR",
    position: "absolute",
    right: 0,
    top: 0,
    color: theme.codeMirror.gray,
    fontFamily: theme.monospace,
    letterSpacing: "0.09em",
    fontSize: "12px",
    margin: "10px",
    lineHeight: 1
  },
  ".Interactive .playgroundPreview": {
    position: "relative",
    textAlign: "center",
    order: "0",
    padding: `${theme.gutter * 2}px ${theme.gutter}px`,
    background: theme.lighterGray,
    border: `1px solid ${theme.lightGray}`
  },
  ".Interactive .playgroundPreview:after": {
    content: "PREVIEW",
    position: "absolute",
    right: 0,
    top: 0,
    color: theme.lightGray,
    fontFamily: theme.monospace,
    letterSpacing: "0.09em",
    fontSize: "12px",
    margin: "10px",
    lineHeight: 1
  },
  ".Interactive .playgroundError": {
    background: theme.paleRed,
    color: theme.whiteSand,
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
  ".Interactive pre, .CodeMirror-code": {
    fontFamily: theme.monospace,
    fontSize: "14px",
    lineHeight: 1.2
  },
  ".CodeMirror": {
    background: "none !important"
  },
  /**
   * Ecology Playground Theme/Color Palette
   */
  ".playgroundStage": {
    background: theme.codeMirror.bg,
    color: theme.white,
    transition: "background-color 195ms ease-in"
  },
  ".playgroundStage.ReactCodeMirror--focused": {
    background: theme.codeMirror.bgFocused,
    transition: "background-color 250ms ease-out"
  },
  ".cm-s-elegant div.CodeMirror-cursor": {
    borderLeft: "1px solid white !important"
  },
  ".cm-s-elegant div.CodeMirror-selected": {
    background: `${theme.codeMirror.selected} !important`
  },
  ".cm-s-elegant span.cm-comment": {
    color: theme.codeMirror.gray
  },
  ".cm-s-elegant span.cm-operater": {
    color: theme.codeMirror.softCyan
  },
  ".cm-s-elegant span.cm-keyword": {
    color: theme.codeMirror.blue
  },
  ".cm-s-elegant span.cm-atom": {
    color: theme.codeMirror.cyan
  },
  ".cm-s-elegant span.cm-def": {
    color: theme.codeMirror.yellow
  },
  ".cm-s-elegant span.cm-attribute": {
    color: theme.codeMirror.yellow
  },
  ".cm-s-elegant span.cm-variable": {
    color: theme.codeMirror.lime
  },
  ".cm-s-elegant span.cm-variable-2": {
    color: theme.codeMirror.cement
  },
  ".cm-s-elegant span.cm-string": {
    color: theme.codeMirror.lightCement
  },
  ".cm-s-elegant span.cm-string-2": {
    color: theme.codeMirror.lime
  },
  ".cm-s-elegant span.cm-number": {
    color: theme.codeMirror.purple
  },
  ".cm-s-elegant span.cm-tag": {
    color: theme.codeMirror.red
  },
  ".cm-s-elegant span.cm-property": {
    color: theme.codeMirror.cyan
  },
  ".cm-s-elegant span.cm-qualifier": {
    color: theme.codeMirror.orange
  },
  ".cm-s-elegant span.cm-meta": {
    color: theme.codeMirror.cyan
  },
  ".cm-s-elegant span.cm-header": {
    color: theme.codeMirror.red
  },
  ".cm-s-elegant span.cm-operator, .CodeMirror pre": {
    color: theme.codeMirror.cement
  },
  ".cm-s-elegant span.CodeMirror-matchingbracket": {
    boxSizing: "border-box",
    background: "transparent",
    borderBottom: "1px solid"
  },
  ".cm-s-elegant span.CodeMirror-nonmatchingbracket": {
    borderBottom: "1px solid",
    background: "none"
  }
};
