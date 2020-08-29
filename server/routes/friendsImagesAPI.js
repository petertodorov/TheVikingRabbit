var express = require("express");
var router = express.Router();
const allFriends = require('../public/assets/friendsImages')

router.get("/", function(req, res, next) {
    res.send(allFriends);
});

module.exports = router;