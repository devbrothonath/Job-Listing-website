import React, { useState } from "react";
import { Link } from "react-router-dom";

const JobForm = () => {
  const [companyName, setCompanyName] = useState("");
  const [logoURL, setLogoURL] = useState("");
  const [position, setPosition] = useState("");
  const [salary, setSalary] = useState("");
  const [jobType, setJobType] = useState("");
  const [remote, setRemote] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [aboutCompany, setAboutCompany] = useState("");
  const [skillsRequired, setSkillsRequired] = useState([]);
  const [information, setInformation] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const job = {
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
    };

    const response = await fetch("http://localhost:8000/api/jobs", {
      method: "POST",
      body: JSON.stringify(job),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setCompanyName("");
      setLogoURL("");
      setPosition("");
      setSalary("");
      setJobType("");
      setRemote("");
      setLocation("");
      setDescription("");
      setAboutCompany("");
      setSkillsRequired([]);
      setInformation("");
      setError(null);
      console.log("New Job Added", json);
    } 
  };
  return (
    <div>
        <div>
            <Link to="/">Home</Link>
        </div>
      <form className="create-job" onSubmit={handleSubmit}>
        <h3>Add a new job</h3>

        <label>Company Name</label>
        <input
          type="text"
          onChange={(e) => setCompanyName(e.target.value)}
          value={companyName}
        />
        <label>logo URL</label>
        <input
          type="text"
          onChange={(e) => setLogoURL(e.target.value)}
          value={logoURL}
        />
        <label>Position</label>
        <input
          type="text"
          onChange={(e) => setPosition(e.target.value)}
          value={position}
        />
        <label>Salary</label>
        <input
          type="number"
          onChange={(e) => setSalary(e.target.value)}
          value={salary}
        />
        <label>Job Type</label>
        <input
          type="text"
          onChange={(e) => setJobType(e.target.value)}
          value={jobType}
        />
        <label>Remote/Office</label>
        <input
          type="text"
          onChange={(e) => setRemote(e.target.value)}
          value={remote}
        />
        <label>Location</label>
        <input
          type="text"
          onChange={(e) => setLocation(e.target.value)}
          value={location}
        />
        <label>Description</label>
        <input
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <label>About Company</label>
        <input
          type="text"
          onChange={(e) => setAboutCompany(e.target.value)}
          value={aboutCompany}
        />
        <label>Skills Required</label>
        <input
          type="text"
          onChange={(e) => setSkillsRequired(e.target.value)}
          value={skillsRequired}
        />
        <label>Information</label>
        <input
          type="text"
          onChange={(e) => setInformation(e.target.value)}
          value={information}
        />

        <button>Add Job</button>
        {error && <div className="error-msg">{error}</div>}
      </form>
    </div>
  );
};

export default JobForm;
