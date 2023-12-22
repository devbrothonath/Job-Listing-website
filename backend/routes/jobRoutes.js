const { Router } = require("express");

//! controller functions
const { getJobs, getJob, createJob, updateJob } = require("../controllers/jobController")

const router = Router();

//! GET all jobs
router.get("/", getJobs);

//! GET a single job
router.get("/:id", getJob);

//! ADD a new job
router.post("/", createJob);

//! UPDATE a job
router.patch("/:id", updateJob);

module.exports = router;