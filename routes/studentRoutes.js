const express = require('express');
const router = express.Router();
let students = require('../data/students');

router.get('/', (req, res) => {
  res.json(students);
});

router.post('/', (req, res) => {
  const newStudent = { id: Date.now(), ...req.body };
  students.push(newStudent);
  res.status(201).json(newStudent);
});

module.exports = router;