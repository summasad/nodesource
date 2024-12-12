var express = require("express");
var User = require("../schemas/user");

const router = express.Router();

router
  .get("/", async (req, res, next) => {
    try {
      //db.users.find({})
      const user = await User.find({});
      res.json(users); //==response entity
    } catch (error) {
      next(error);
    }
  })
  .post(async (req, res, next) => {
    try {
      //db.users.insertOne({name:'홍길동', age:15, married})
      //req.body : form안의 내용 가져올수 있음
      const user = await User.create({
        name: req.body.name,
        age: req.body.age,
        married: req.body.married,
      });
      console.log("user 삽입 결과", user);

      res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  });

module.exports = router;
