import { useState } from "react";
import "./filter.css";
import SkillsFilter from "../skills/SkillsFilter";
import JobFormBtn from "../jobFormBtn/JobFormBtn";
import { useAuthContext } from "../../hooks/useAuthContext";

const Filter = ({ query, handleInputChange, handleClick, handleChange, value }) => {
  
  const { user } = useAuthContext();
  
  return (
    <div className="filter">
      <form>
        <div className="search">
          <input
            name="searchBar"
            id="searchBar"
            type="text"
            placeholder="Type any job title"
            onChange={handleInputChange}
            value={query}
          />
        </div>
        {/* <div className="flex">
          <div className="skills">
            <select name="Add skills" id="" required defaultValue={defaultSkill}>
              <option value="" disabled>
                Skills
              </option>
              <option onClick={handleClick} value={value}>Frontend</option>
              <option onClick={handleClick} value={value}>Backend</option>
            </select>
          </div>
          <div className="selected">
            <div className="skill">
              <div>Frontend</div>
              <div>X</div>
            </div>
            <div className="skill">
              <div>Backend</div>
              <div>X</div>
            </div>
          </div>
          <div className="clear">
            <div>Clear</div>
          </div>
        </div> */}
      </form>
      <div className="skillFilter">
        <SkillsFilter handleChange={handleChange} handleClick={handleClick} />
      </div>
      {user && (<div className="jobFormButton">
        <JobFormBtn />
      </div>)}
    </div>
  );
};

export default Filter;
