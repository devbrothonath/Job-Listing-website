import Navbar from "../components/navbar/Navbar";
import Filter from "../components/filter/Filter";
import JobBrief from "../components/jobBrief/JobBrief";
import { useEffect, useState } from "react";

const Home = () => {
  const [jobs, setJobs] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await fetch("http://localhost:5174/api/jobs");
      console.log(response)
      try {
        if (response.status !== 200) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const json = await response.json();
        console.log(json);
        setJobs(json);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <>
      <div className="home">
        {/* <Navbar></Navbar>
        <Filter></Filter>
        <JobBrief></JobBrief>
        <JobBrief></JobBrief>
        <JobBrief></JobBrief> */}
        <div className="jobs">
            {jobs && jobs.map((job) => (
                <p key={job._id}>{job.companyName}</p>
            ))}
        </div>
      </div>
    </>
  );
};

export default Home;
