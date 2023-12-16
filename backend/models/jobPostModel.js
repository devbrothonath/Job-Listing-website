const mongoose = require("mongoose");

const jobPostSchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  logoURL: { type: String, required: true },
  recruiterName: { type: String },
  createdAt: { type: Date, default: Date.now },
  position: { type: String, required: true },
  salary: { type: String, required: true },
  jobType: { type: String, enum: ["Full-Time", "Part-Time"], required: true },
  remote: { type: String, enum: ["Remote", "Office"], required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  aboutCompany: { type: String, required: true },
  skillsRequired: { type: [String], required: true },
  information: { type: String },
});

jobPostSchema.statics.addJob = async function ({
  companyName,
  logoURL,
  position,
  salary,
  jobType,
  remote,
  location,
  description,
  aboutCompany,
  skillsRequired,
  information,
}) {
  // validation
  if (
    !companyName ||
    !logoURL ||
    !position ||
    !salary ||
    !jobType ||
    !remote ||
    !location ||
    !description ||
    !aboutCompany ||
    !skillsRequired
  ) {
    throw Error("All fields must be filled");
  }

  const newJob = await this.create({
    companyName,
    logoURL,
    position,
    salary,
    jobType,
    remote,
    location,
    description,
    aboutCompany,
    skillsRequired,
    information,
  });

  return newJob;
};

const jobPost = mongoose.model("jobPost", jobPostSchema);

module.exports = jobPost;

