const express = require('express');

const { getStudents } = require('../controllers/studentControllers');
const router = express.Router();

router.get('/', getStudents);

module.exports = router