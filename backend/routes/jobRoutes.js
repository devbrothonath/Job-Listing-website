const { Router } = require("express");

// controller functions
const { addJob } = require("../controllers/addJobController")

const router = Router();

router.post("/add-job", addJob);

module.exports = router;