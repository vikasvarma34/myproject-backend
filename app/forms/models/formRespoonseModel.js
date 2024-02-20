const mongoose = require("mongoose");

const responseSchema = new mongoose.Schema({
  // Reference to the form being responded to
  formId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Forms',
    required: true
  },
  // Information about the respondent, could be a user ID or any identifier
  respondent: {
    type: String, // Adjust this type according to how you identify users or respondents
    required: true
  },
  // Array of responses
  responses: [{
    // Reference to the question being answered
    questionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Question',
      required: true
    },
    questionOrder: { type: Number, required: true },
    // The response content; structure varies based on question type
    // For text questions, this could be a string
    // For choice questions, this could be the selected option(s)
    answer: mongoose.Schema.Types.Mixed,
    // Optionally capture additional metadata with each response
    metadata: {
      answeredAt: Date, // Timestamp of when the question was answered
      // Any other relevant metadata
    }
  }],
  // Automatic timestamping for when the response was created and last updated
}, {
    timestamps: true, // Enable timestamps
});

module.exports = mongoose.model("Response", responseSchema);
