'use strict';
var exphbs = require("express3-handlebars");
var features = require('./features');




var hbs = exphbs.create({
    // Specify helpers which are only registered on this instance.
    helpers: {
        feature: function(user, flag, options) {
		  if (features(flag, { session: { user: user } })) {
		    return options.fn(this);
		  }
		}
    },
    extname: ".html"
});






module.exports = hbs.engine;