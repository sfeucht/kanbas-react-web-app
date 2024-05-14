export default function Modules() {
    return (
      <div>
        <h2>Modules</h2>
        <button id="wd-collapse-all" onClick={() => alert("Not Implemented!")} type="button">
        Collapse All
        </button>
        <button id="wd-view-progress" onClick={() => alert("Not Implemented!")} type="button">
        View Progress
        </button>
        <select id="wd-publish-all">
            <option value="VAL2" selected>Publish All</option>
            <option value="VAL3">something?</option>
        </select>
        <button id="wd-add-module">+ Module</button>

        {/* Collapse All button, View Progress button, etc. */}
        <ul id="wd-modules">
          <li className="wd-module">
            <div className="wd-title">Week 1</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to the course</li>
                  <li className="wd-content-item">Learn what is Web Development</li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="wd-module">
            <div className="wd-title">Week 2</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
  );}
  