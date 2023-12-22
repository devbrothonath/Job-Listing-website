import React from "react";
import logo from "../../assets/vite.svg";
import "./jobBrief.css";

const JobBrief = ({ result }) => {
  return (
    <div className="jobBrief">
      <div>{result}</div>
    </div>
  );
};

export default JobBrief;
