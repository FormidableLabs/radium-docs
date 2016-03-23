// -------------------------------
// BUILDER THEME
// -------------------------------
// Settings
import settings from "./radium-settings";

// Stylesheet

export default {
 "*, *:before, *:after": {
  WebkitBoxSizing: "inherit",
  MozBoxSizing: "inherit",
  boxSizing: "inherit"
 },
 html: {
  msTextSizeAdjust: "100%",
  WebkitTextSizeAdjust: "100%"
 },
 body: {
  fontFamily: settings.sansSerif,
  lineHeight: 1.5,
  margin: 0,
  color: settings.navy,
  WebkitBoxSizing: "border-box",
  MozBoxSizing: "border-box",
  boxSizing: "border-box",
  MozOsxFontSmoothing: "grayscale",
  WebkitFontSmoothing: "antialiased"
 },
 "html, body": {
  overflowX: "hidden"
 },
 "article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section, summary": {
  display: "block"
 },
 "h1, h2, h3, h4, h5, h6, hgroup, ul, ol, dd, p, figure, pre, table, fieldset, hr, .highlight": {
  marginTop: 0,
  marginBottom: "1.5rem"
 },
 img: {
  maxWidth: "100%"
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
 ".Container": {
  margin: "0 auto",
  maxWidth: 960,
  paddingLeft: "1em",
  paddingRight: "1em"
 },
 ".Row": {
  padding: "2rem 0"
 },
 ".Grid": {
  display: "block",
  margin: 0,
  padding: 0,
  textAlign: "left",
  fontSize: 0
 },
 ".Grid--padded": {
  marginRight: -18,
  marginLeft: -18
 },
 ".Grid--padded > .Grid-unit": {
  paddingRight: 18,
  paddingLeft: 18
 },
 ".Grid-unit": {
  fontSize: "1rem",
  display: "inline-block",
  margin: 0,
  padding: 0,
  textAlign: "left",
  verticalAlign: "top",
  width: "100%"
 },
 ".Header": {
  position: "relative",
  paddingTop: 70,
  paddingBottom: 45,
  marginBottom: "3rem"
 },
 ".Header:before": {
  content: "\"\"",
  background: settings.brightRed,
  boxShadow: `0 15px 0 ${settings.lightRed}, 0 30px 0 ${settings.red}, 0 45px 0 ${settings.darkRed}`,
  WebkitTransform: "rotate(-5deg)",
  MozTransform: "rotate(-5deg)",
  transform: "rotate(-5deg)",
  marginTop: -170,
  position: "absolute",
  top: 0,
  right: "-20%",
  left: "-20%",
  bottom: 0
 },
 ".Logo": {
  fontSize: "1.5rem",
  lineHeight: 1,
  height: 230,
  margin: "0 auto",
  padding: 15,
  position: "relative",
  textAlign: "center",
  width: 230,
  background: settings.brightRed,
  color: "#fff",
  border: "22px solid #fff",
  textRendering: "optimizeLegibility"
 },
 ".Logo:before": {
  content: "\"R\"",
  fontSize: 140,
  position: "absolute",
  right: 0,
  bottom: 0,
  left: 0,
  lineHeight: 1,
  pointerEvents: "none"
 },
 ".Footer": {
  background: settings.navy,
  color: "#fff"
 },
 ".Footer a": {
  fontWeight: 700,
  color: settings.brightRed
 },
 ".Footer a:hover, .Footer a:focus": {
  color: "#fff"
 },
 ".FooterLogo": {
  display: "block",
  margin: "16px 0"
 },
 ".FooterLogo img": {
  display: "block",
  margin: "0 auto"
 },
 ".Installer": {
  display: "inline-block",
  background: settings.navy,
  border: `1px solid ${settings.darkNavy}`,
  color: "#fff",
  fontFamily: settings.monospace,
  fontSize: 18,
  lineHeight: 1.2,
  margin: "0 auto",
  padding: "16px 32px"
 },
 mediaQueries: {
  [settings.mediaSizes.medium]: {
   ".Installer": {
    padding: "24px 48px",
    marginTop: 24,
    marginBottom: 24
   },
   ".Copy": {
    fontSize: "1.3125rem"
   },
   ".Copy .highlight": {
    margin: "36px -24px"
   },
   ".Copy .highlight pre": {
    padding: 24
   },
   ".u-size1of2-l": {
    width: "50%"
   },
   ".u-size1of3-l": {
    width: "33.3333%"
   },
   ".u-size2of3-l": {
    width: "66.6666%"
   },
   ".u-margin-l": {
    marginBottom: 24
   },
   ".u-noMargin-l": {
    marginBottom: 0
   }
  }
 },
 ".Copy .highlight": {
  marginLeft: -16,
  marginRight: -16
 },
 ".Copy .highlight pre": {
  marginBottom: 0,
  background: settings.navy,
  color: "#fff",
  fontFamily: settings.monospace,
  fontSize: 16,
  lineHeight: 1.2,
  overflow: "auto",
  padding: 16
 },
 ".Copy ul": {
  paddingLeft: 24,
  listStyle: "none"
 },
 ".Copy ul > li": {
  position: "relative"
 },
 ".Copy ul > li + li": {
  marginTop: 10
 },
 ".Copy ul > li:before": {
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
 ".Copy li > ul": {
  marginTop: 10,
  marginBottom: 0
 },
 ".Copy a": {
  color: settings.red,
  fontWeight: 700
 },
 ".Copy a:hover, .Copy a:focus": {
  color: settings.navy
 },
 ".Copy code": {
  fontFamily: settings.monospace,
  background: "#eee",
  padding: "0 3px"
 },
 ".CopySmall": {
  fontSize: 16
 },
 ".highlight code": {
  background: "transparent",
  padding: 0
 },
 "#radium-example": {
  background: "#eee",
  padding: 24,
  margin: "24px -24px",
  textAlign: "center"
 },
 ".Formidabanner": {
  position: "absolute",
  top: 0,
  right: 0,
  left: 0,
  padding: 10,
  borderBottomWidth: 1,
  borderBottomStyle: "solid",
  borderBottomColor: "rgb(29, 34, 39)",
  color: "rgb(255, 255, 255)",
  fontWeight: 700,
  textDecoration: "none",
  textAlign: "center",
  background: "rgb(43, 48, 59)"
 },
 ".u-size1of2": {
  width: "50%"
 },
 ".u-size1of3": {
  width: "33.3333%"
 },
 ".u-size2of3": {
  width: "66.6666%"
 },
 ".u-noMargin": {
  marginBottom: 0
 },
 ".u-textCenter": {
  textAlign: "center"
 },
 ".u-textLeft": {
  textAlign: "left"
 },
 ".u-marginModule > *:last-child": {
  marginBottom: 0
 },
 ".highlight .hll": {
  backgroundColor: "#4f5b66"
 },
 ".highlight": {
  background: settings.navy,
  color: "#eff1f5"
 },
 ".highlight .c": {
  color: "#65737e"
 },
 ".highlight .err": {
  color: "#bf616a"
 },
 ".highlight .k": {
  color: "#b48ead"
 },
 ".highlight .l": {
  color: "#d08770"
 },
 ".highlight .n": {
  color: "#eff1f5"
 },
 ".highlight .o": {
  color: "#96b5b4"
 },
 ".highlight .p": {
  color: "#eff1f5"
 },
 ".highlight .cm": {
  color: "#65737e"
 },
 ".highlight .cp": {
  color: "#65737e"
 },
 ".highlight .c1": {
  color: "#65737e"
 },
 ".highlight .cs": {
  color: "#65737e"
 },
 ".highlight .gd": {
  color: "#bf616a"
 },
 ".highlight .ge": {
  fontStyle: "italic"
 },
 ".highlight .gh": {
  color: "#eff1f5",
  fontWeight: "bold"
 },
 ".highlight .gi": {
  color: "#a3be8c"
 },
 ".highlight .gp": {
  color: "#65737e",
  fontWeight: "bold"
 },
 ".highlight .gs": {
  fontWeight: "bold"
 },
 ".highlight .gu": {
  color: "#96b5b4",
  fontWeight: "bold"
 },
 ".highlight .kc": {
  color: "#b48ead"
 },
 ".highlight .kd": {
  color: "#b48ead"
 },
 ".highlight .kn": {
  color: "#96b5b4"
 },
 ".highlight .kp": {
  color: "#b48ead"
 },
 ".highlight .kr": {
  color: "#b48ead"
 },
 ".highlight .kt": {
  color: "#ebcb8b"
 },
 ".highlight .ld": {
  color: "#a3be8c"
 },
 ".highlight .m": {
  color: "#d08770"
 },
 ".highlight .s": {
  color: "#a3be8c"
 },
 ".highlight .na": {
  color: "#8fa1b3"
 },
 ".highlight .nb": {
  color: "#eff1f5"
 },
 ".highlight .nc": {
  color: "#ebcb8b"
 },
 ".highlight .no": {
  color: "#bf616a"
 },
 ".highlight .nd": {
  color: "#96b5b4"
 },
 ".highlight .ni": {
  color: "#eff1f5"
 },
 ".highlight .ne": {
  color: "#bf616a"
 },
 ".highlight .nf": {
  color: "#8fa1b3"
 },
 ".highlight .nl": {
  color: "#eff1f5"
 },
 ".highlight .nn": {
  color: "#ebcb8b"
 },
 ".highlight .nx": {
  color: "#fff"
 },
 ".highlight .py": {
  color: "#eff1f5"
 },
 ".highlight .nt": {
  color: "#96b5b4"
 },
 ".highlight .nv": {
  color: "#bf616a"
 },
 ".highlight .ow": {
  color: "#96b5b4"
 },
 ".highlight .w": {
  color: "#eff1f5"
 },
 ".highlight .mf": {
  color: "#d08770"
 },
 ".highlight .mh": {
  color: "#d08770"
 },
 ".highlight .mi": {
  color: "#d08770"
 },
 ".highlight .mo": {
  color: "#d08770"
 },
 ".highlight .sb": {
  color: "#a3be8c"
 },
 ".highlight .sc": {
  color: "#eff1f5"
 },
 ".highlight .sd": {
  color: "#65737e"
 },
 ".highlight .s2": {
  color: "#a3be8c"
 },
 ".highlight .se": {
  color: "#d08770"
 },
 ".highlight .sh": {
  color: "#a3be8c"
 },
 ".highlight .si": {
  color: "#d08770"
 },
 ".highlight .sx": {
  color: "#a3be8c"
 },
 ".highlight .sr": {
  color: "#a3be8c"
 },
 ".highlight .s1": {
  color: "#a3be8c"
 },
 ".highlight .ss": {
  color: "#a3be8c"
 },
 ".highlight .bp": {
  color: "#eff1f5"
 },
 ".highlight .vc": {
  color: "#bf616a"
 },
 ".highlight .vg": {
  color: "#bf616a"
 },
 ".highlight .vi": {
  color: "#bf616a"
 },
 ".highlight .il": {
  color: "#d08770"
 }
}
