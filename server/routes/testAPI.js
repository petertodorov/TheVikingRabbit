var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
    res.send("My First API HOREA PlINGY PLONGY  ");
});

module.exports = router;