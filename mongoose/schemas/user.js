var mongoose = require("mongoose");
const { Schema } = mongoose;
const {
  Type: { Object },
} = Schema;
const userSchema = new Schema({
  name: {
    type: String,
    require: true,
    unique: true,
  },
  age: {
    type: Number,
    require: true,
  },
  married: {
    type: Boolean,
    require: true,
  },
  comment: String,
  createdAt: {
    type: Date,
    require: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
