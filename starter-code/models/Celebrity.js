const mongoose = require("mongoose")
const Schema = mongoose.Schema

const celebritySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  occupation: {
    type: String,
    required: true
  },
  catchPhrase: {
    type: String,
    required: true
  }
},{
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
}
)

module.exports = mongoose.model("Celebrity", celebritySchema)