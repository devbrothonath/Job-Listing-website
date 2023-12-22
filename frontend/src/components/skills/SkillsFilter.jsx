import React from 'react'

const SkillsFilter = ({handleChange, handleClick}) => {
    const defaultSkill = "";
  return (
    <div>
        <select name="skills" id="skills" defaultValue={defaultSkill} onChange={handleChange}>
            <option value="" disabled>Skills</option>
            <option value="all-jobs">All Jobs</option>
            <option value="frontend">frontend</option>
            <option value="backend">backend</option>
            <option value="react">React</option>
            <option value="devops">Devops</option>
            <option value="ui">UI</option>
        </select>
    </div>
  )
}

export default SkillsFilter