const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-contact-us-js": hot(preferDefault(require("F:\\React\\gatsby\\gatsby-company\\src\\pages\\contact-us.js"))),
  "component---src-pages-home-js": hot(preferDefault(require("F:\\React\\gatsby\\gatsby-company\\src\\pages\\home.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("F:\\React\\gatsby\\gatsby-company\\src\\pages\\index.js"))),
  "component---src-pages-layout-js": hot(preferDefault(require("F:\\React\\gatsby\\gatsby-company\\src\\pages\\layout.js"))),
  "component---src-pages-our-services-js": hot(preferDefault(require("F:\\React\\gatsby\\gatsby-company\\src\\pages\\our-services.js"))),
  "component---src-pages-who-we-are-js": hot(preferDefault(require("F:\\React\\gatsby\\gatsby-company\\src\\pages\\who-we-are.js")))
}

