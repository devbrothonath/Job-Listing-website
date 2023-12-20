import "./filter.css"

const Filter = () => {
  return (
    <div className="filter">
      <div className="search">
        <input id="searchBar" type="text" placeholder="Type any job title" />
      </div>
      <div className="flex">
          <div className="skills">
            <select name="Add skills" id="" required>
              <option value="" disabled selected>
                Skills
              </option>
              <option value="frontend">Frontend</option>
              <option value="backend">Backend</option>
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
      </div>
    </div>
  );
};

export default Filter;
