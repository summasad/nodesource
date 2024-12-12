var mongoose = require("mongoose");
const { Schema } = mongoose;
const {
  Type: { ObjectId },
} = Schema;
const commentSchema = new Schema({
  commenter: {
    type: ObjectId,
    require: true,
    ref: "User", //User 스키마 사용자의 ObjectId가 삽입됨
  },
  comment: {
    type: Number,
    require: true,
  },
  createdAt: {
    type: Date,
    require: Date.now,
  },
});

module.exports = mongoose.model("Comment", commentSchema);
