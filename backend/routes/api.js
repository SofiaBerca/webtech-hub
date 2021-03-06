const express = require('express')
const models = require('../models/index');

const router = express.Router()

const studentsController = require('../controllers/StudentsController.js')

router.get('/students', studentsController.findAll)
router.get('/students/:id', studentsController.findOne)

const teamsController = require('../controllers/TeamsController.js')

router.get('/teams', teamsController.findAll)
router.get('/teams/:id', teamsController.findOne)

module.exports = router