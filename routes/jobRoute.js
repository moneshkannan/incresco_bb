const express = require('express');
const { getAllJobs, createJob } = require('../controller/jobController');
const router = express.Router();

router.get("/", getAllJobs)
router.post("/", createJob)

module.exports = router