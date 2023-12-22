import React from "react";
import { Link } from "react-router-dom";

const JobCard = ({ data }) => {
  const { _id, logoURL, position, salary, location, remote, jobType } = data;
  return (
    <div className="jobCard">
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <h3>{position}</h3>
        <div>
          <h4>11-50</h4>
          <h4>{salary}</h4>
          <h4>{location}</h4>
        </div>
        <div>
          <h5>{remote}</h5>
          <h5>{jobType}</h5>
        </div>
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
      <div>
        <button>
          <Link to={`/${_id}`}>View Details</Link>
        </button>
      </div>
    </div>
  );
};

export default JobCard;
