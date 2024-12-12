var mongoose = require("mongoose");
//몽고 디비와 연동하는 모듈
const conn = () => {
  if (process.env.NODE_ENV !== "production") {
    mongoose.set("debug", true);
  }
  var mongoDB = "mongodb://root:12345@127.0.0.1:27017";
  mongoose
    .connect(mongoDB, { dbName: "nodejs" })
    .then(() => console.log("몽고디비 연결 성공"))
    .catch((err) => console.log("몽고디비 연결 실패", err));
};

var db = mongoose.connection;
db.on("error", console.error.bind(console, "몽고 디비 연결 에러"));
db.on(
  "disconnected",
  console.error.bind(console, "몽고 디비 연결이 끊겼습니다. 연결 재시도")
);

module.exports = conn;
