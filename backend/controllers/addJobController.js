const jobPost = require("../models/jobPostModel");

const addJob = async (req, res) => {
  const jobData = req.body;
  try {
    const newJob = await jobPost.addJob(jobData);
    res.status(200).json(newJob);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

module.exports = { addJob };
