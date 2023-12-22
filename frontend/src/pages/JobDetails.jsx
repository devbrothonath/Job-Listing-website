import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState([]);
  useEffect(() => {
    const fetchJobs = async () => {
      const response = await fetch(`http://localhost:8000/api/jobs/${id}`);

    //   console.log(response)
      const json = await response.json();
    //   console.log(json)

      setJob(json)


      //   try {
      //     if (!response.ok) {
      //       throw new Error(`HTTP error! Status: ${response.status}`);
      //     }
      //     const json = await response.json();
      //     setJobs(json);
      //   } catch (error) {
      //     console.error("Error fetching jobs:", error);
      //   }
    };
    fetchJobs()
      
  }, []);
  return (
    <div>
      <h2>JobDetails: {id}</h2>
      <h3>{job.position}</h3>
    </div>
  );
};

export default JobDetails;
