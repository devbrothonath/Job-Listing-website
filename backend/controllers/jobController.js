const Job = require("../models/jobModel");
const mongoose = require("mongoose");

//! get all jobs
const getJobs = async (req, res) => {
  const jobs = await Job.find({}).sort({ createdAt: -1 });

  res.status(200).json(jobs);
};

// ! get a single job
const getJob = async (req, res) => {
  const {id} = req.params;

  const job = await Job.findById(id)

  if(!job) {
    return res.status(404).json({error: "No such job"})
  }

  res.status(200).json(job)
}

//! add a new job
const createJob = async (req, res) => {
  const jobData = req.body;

  //* add document to DB
  try {
    const newJob = await Job.createJob(jobData);
    res.status(200).json(newJob);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//! update a job
const updateJob = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such workout" });
  }

  const job = await Job.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!job) {
    res.status(400).json({ error: "No such workout" });
  }

  res.status(200).json(job);
};

module.exports = { getJobs, getJob, createJob, updateJob };
