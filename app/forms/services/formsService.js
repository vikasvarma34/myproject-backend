const Forms = require("../models/formsModel");

const getAllForms = async () => Forms.find();

const getForm = async (id) => Forms.findOne({ _id: id }).populate("questions");

const createForm = async (data) => new Forms(data).save();

const updateForm = async (id, data) => Forms.findOneAndUpdate({ _id: id }, data);

const removeForm = async (id) => Forms.findByIdAndDelete(id);

module.exports = { getAllForms, getForm, createForm, updateForm, removeForm };
