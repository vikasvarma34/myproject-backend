const asyncHandler = require("express-async-handler");
const formsService = require("../services/formsService");
const questionsService = require("../services/questionsService");

// const getAllForms = asyncHandler(async (req, res) => {
//   const forms = await formsService.getAllForms();
//   res.json(forms);
// });

const getForm = asyncHandler(async (req, res) => {
  const form = await formsService.getForm(req.params.id);
  res.json(form);
});

const createForm = asyncHandler(async (req, res) => {
  const { questions, ...formData } = req.body;

  delete formData.questions;

  const formId = (await formsService.createForm(formData))._id;

  const questionPromises = questions.map((questionData) =>
    questionsService.createQuestion({ ...questionData, formId })
  );

  const createdQuestions = await Promise.all(questionPromises);

  const questionIds = createdQuestions.map((question) => question._id);

  const createdForm = await formsService.updateForm(formId, {
    $set: { questions: questionIds },
  });

  res.json(createdForm);
});

// const updateForm = asyncHandler(async (req, res) => {
//   const updatedForm = await formsService.updateForm(req.params.id, req.body);
//   res.json(updatedForm);
// });

// const removeForm = asyncHandler(async (req, res) => {
//   const removedForm = await formsService.removeForm(req.params.id);
//   res.json(removedForm);
// });

module.exports = {
  // getAllForms,
  getForm,
  createForm,
  // updateForm,
  // removeForm,
};
