var express = require("express");
var User = require("../schemas/user");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    //db.users.find({}) : 전체 유저 가져오기
    const users = await User.find({});
    res.render("user/user", { users: users });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
