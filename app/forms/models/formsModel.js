const mongoose = require("mongoose");
/*
const formsSchema = new mongoose.Schema({
  formId: mongoose.Schema.Types.ObjectId,
  title: { type: String, required: true },
  description: { type: String, required: true },
  tier: {
    type: String,
    enum: ["tier-1", "tier-2", "individual"],
    required: true,
  },
  questions: [
    {
      questionId: mongoose.Schema.Types.ObjectId,
      questionText: { type: String, required: true },
      type: {
        type: String,
        enum: ["single-choice", "multiple-choice", "text"],
        required: true,
      },
      options: [
        {
          value: { type: Number, required: true },
          text: { type: String, required: true },
        },
      ],
    },
  ],
});
*/

// Define the schema for forms
const formsSchema = new mongoose.Schema({
  // The name of the form
  formName: { type: String, required: true },
  // Order of the form for sorting purposes
  order: { type: Number, required: true },
  // The title of the form
  title: { type: String, required: true },
  // A description of the form
  description: String,
  // The tier/category of the form
  tier: { type: String, enum: ['tier-1', 'tier-2', 'individual'], required: true },
  // Flag to indicate if the form is mandatory
  mandatory: { type: Boolean, default: false, required: true },
  // Array of references to questions associated with this form
  questions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' }],
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt timestamps
});

// Model representing the collection of forms
module.exports = mongoose.model("Forms", formsSchema);
