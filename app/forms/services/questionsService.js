const Questions = require("../models/questionsModel");

const getAllQuestions = async () => Questions.find();

const getQuestion = async (id) => Questions.findOne({ _id: id });

const createQuestion = async (data) => new Questions(data).save();

const updateQuestion = async (id, data) => Questions.findOneAndUpdate({ _id: id }, data);

const removeQuestion = async (id) => Questions.findByIdAndDelete(id);

module.exports = { getAllQuestions, getQuestion, createQuestion, updateQuestion, removeQuestion };
