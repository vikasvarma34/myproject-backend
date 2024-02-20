const express = require('express');
const router = express.Router();


const formsRoutes = require('../app/forms/routes/formsRoutes');


router.use('/forms', formsRoutes);


module.exports = router;
