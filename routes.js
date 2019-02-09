const routes = require("next-routes");

// ---------------------------------------------------git // Name   Page      Pattern
module.exports = routes() //--------------------------// ----   ----      -----
  .add("index") //------------------------------------// about  about     /about
  .add("channel", "/:slug.:id", "channel") //----------------------// blog   blog      /blog/:slug
  .add("podcast", "/:slugChaneel.:idChannel/:slug.:id", "podcast"); //----------------------// blog   blog      /blog/:slug
