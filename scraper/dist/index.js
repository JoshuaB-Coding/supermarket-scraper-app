"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var routes_1 = require("./routes");
var app = express();
var port = process.env.PORTAL_PORT || 5000;
app.get('/', function (req, res) {
    res.send('Hello World');
});
app.use('/v1/', routes_1.default);
app.listen(port, function () {
    console.log("Scraper app listening on port ".concat(port));
});
//# sourceMappingURL=index.js.map