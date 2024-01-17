import Navbar from "../components/navbar/Navbar";
import Filter from "../components/filter/Filter";
import JobBrief from "../components/jobBrief/JobBrief";
import JobCard from "../components/jobCard/JobCard";
import { useEffect, useState } from "react";

const Home = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await fetch("https://job-listing-website-devbrotho.onrender.com/api/jobs");
      try {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const json = await response.json();
        setJobs(json);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };
    fetchJobs();
  }, []);

  const [query, setQuery] = useState("");
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const [selectedCategory, setSelectedCategory] = useState(null);

  // filter based on title
  const filteredItems = jobs.filter(
    (job) => job.position.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  const handleChange = (e) => {
    setSelectedCategory(e.target.value)
  };

  // main function
  const filteredData = (jobs, selectedCategory, query) => {
    let filteredJobs = jobs;

    // filtering input items
    if (query) {
      filteredJobs = filteredItems;
    }

    if (selectedCategory) {
      filteredJobs = jobs.filter(function(job) {
        const lowercasedSkills = job.skillsRequired.map(skillsRequired => skillsRequired.toLowerCase())
        return lowercasedSkills.includes(selectedCategory);
      })
      if (selectedCategory === "all-jobs") {
        filteredJobs = jobs;
      }
    }

    return filteredJobs.map((data, i) => <JobCard key={i} data={data} />);
  };

  const result = filteredData(jobs, selectedCategory, query);

  return (
    <>
      <div className="home">
        <Navbar></Navbar>
        <Filter query={query} handleInputChange={handleInputChange} handleChange={handleChange}/>
        <div className="jobs">
          {/* {jobs && jobs.map((job) => <JobBrief key={job._id} job={job} />)} */}
          {/* {jobs && jobs.map((job) => <JobBrief result={result} />)} */}
          <JobBrief result={result} />
        </div>
      </div>
    </>
  );
};

export default Home;
