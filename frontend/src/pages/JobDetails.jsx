import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import Navbar from "../components/navbar/Navbar";

// date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const JobDetails = () => {
  const { user } = useAuthContext();
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
      <Navbar />
      <section>
        <div>{job.description}</div>
      </section>
      <section>
        <div>
          <div>
            {job.createdAt && (
              <h4>
                {formatDistanceToNow(new Date(job.createdAt), {
                  addSuffix: true,
                })}
              </h4>
            )}
            <h4>{job.jobType}</h4>
            <img src="" alt="" />
            <h4>{job.companyName}</h4>
          </div>
          <div>
            <h3>{job.position}</h3>
          </div>
          <div>
            <h4>{job.location}</h4>
          </div>
          {user && (
            <div>
              <button>Edit Job</button>
            </div>
          )}
        </div>
        <div>
          <h3>About Company</h3>
          <h4>{job.aboutCompany}</h4>
        </div>
        <div>
          <h3>About the Job/Internship</h3>
          <h4>{job.description}</h4>
        </div>
        <div>
          <h3>Skill(s) required</h3>
          <h4>{job.skillsRequired}</h4>
        </div>
        <div>
          <h3>{job.information}</h3>
        </div>
        {/* <div></div> */}
        {/* <h2>JobDetails: {id}</h2> */}
      </section>
    </div>
  );
};

export default JobDetails;
