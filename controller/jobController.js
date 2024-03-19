const Job = require('../models/job')


const getAllJobs = async (req, res) => {
    try {
        const jobs = await Job.find().sort({date_posted: -1})
        res.json(jobs);
    } catch (err) {
        throw new Error(err);
    }
}

const createJob = async (req, res) => {
    try {
        const newJob = await Job.create(res.body);
        res.status(201).json(newJob);
    } catch (err) {
       throw new Error(err);
    }
}

module.exports = {
    getAllJobs,
    createJob
}