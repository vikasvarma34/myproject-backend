const mongoose = require("mongoose");

// Define the schema for individual questions
const questionSchema = new mongoose.Schema(
  {
    // Optional reference to a parent question for nested or follow-up questions
    parentId: { type: mongoose.Schema.Types.ObjectId, ref: "Question", required: false },
    // Reference to the form this question belongs to
    formId: { type: mongoose.Schema.Types.ObjectId, ref: "Form", required: true },
    // The text of the question
    questionText: String,
    // Order of the question within the form for sorting purposes
    order: { type: Number, required: true },
    // Flag to indicate if answering the question is optional
    isOptional: { type: Boolean, required: true, default: false },
    // Type of the question (e.g., single-choice, multiple-choice, text)
    type: {
      type: String,
      enum: ["single-choice", "multiple-choice", "text"],
    },
    // Options for the question, applicable for single and multiple-choice questions
    options: [
      {
        value: Number, // Numeric value associated with the option
        text: String, // Text of the option
        jump: {
          type: Boolean,
          default: false, // Flag to indicate if selecting this option should cause a jump to another question
        },
        jumpTo: {
          type: Number,
          required: false, // Reference to the question to jump to, if applicable
        },
      },
    ],
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt timestamps
  }
);

// Model representing the collection of questions
module.exports = mongoose.model("Question", questionSchema);
