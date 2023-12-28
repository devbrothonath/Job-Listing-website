const { Router } = require("express");

//! controller functions
const { getJobs, getJob, createJob, updateJob } = require("../controllers/jobController")
const requireAuth = require("../middleware/requireAuth")

const router = Router();

//! GET all jobs
router.get("/", getJobs);

//! GET a single job
router.get("/:id", getJob);

//! ADD a new job
router.post("/", requireAuth, createJob);

//! UPDATE a job
router.patch("/:id", requireAuth, updateJob);

module.exports = router;