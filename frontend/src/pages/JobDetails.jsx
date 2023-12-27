import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState([]);
  useEffect(() => {
    const fetchJobs = async () => {
      const response = await fetch(`http://localhost:8000/api/jobs/${id}`);

      const json = await response.json();

      setJob(json);
    };
    fetchJobs();
  }, []);
  return (
    <div>
      <h2>JobDetails: {id}</h2>
      <h3>{job.position}</h3>
      {job.createdAt && (
        <h4>
          {formatDistanceToNow(new Date(job.createdAt), { addSuffix: true })}
        </h4>
      )}
    </div>
  );
};

export default JobDetails;
