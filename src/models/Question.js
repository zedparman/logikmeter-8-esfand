const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  author: { type: String, required: true },
  title: { type: String, required: true },
  caption: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  options: [{ type: Object }], // از نوع Object و ارایه ای از آن
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment"  }], // یک آرایه از رشته‌ها برای کامنت‌ها
});

const Question = mongoose.models.Question || mongoose.model("Question", questionSchema);

module.exports = Question;