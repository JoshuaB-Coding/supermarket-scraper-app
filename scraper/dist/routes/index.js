"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var router = express.Router();
router.use('/', function (req, res) {
    res.send('HELLO THERE');
});
exports.default = router;
//# sourceMappingURL=index.js.map