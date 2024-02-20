const express = require("express");
const router = express.Router();
const formsController = require('../controllers/formsController');

// router.get("/", formsController.getAllForms);

router.get("/:id", formsController.getForm);

router.post("/", formsController.createForm);

// router.put("/:id", formsController.updateForm);

// router.delete("/:id", formsController.removeForm);

module.exports = router;
