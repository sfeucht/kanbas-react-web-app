import { BsGripVertical } from "react-icons/bs"
import ModuleControlButtons from "./ModuleControlButtons"
import AssignmentControlButtons from "./AssignmentControlButtons"
import { TfiPencilAlt } from "react-icons/tfi";


export default function Assignments() {
    return (
      <div id="wd-assignments">

        <input id="wd-search-assignment"
               placeholder="Search for Assignments" />
      
        <div className="float-right">
        <button id="wd-add-assignment-group">+ Group</button>
        <button id="wd-add-assignment">+ Assignment</button>
        </div>
        

        <ul id="wd-assignments" className="list-group rounded-0">
    <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
      <div className="wd-title p-3 ps-2 bg-secondary">
        <BsGripVertical className="me-2 fs-3" />
        left arrow, ASSIGNMENTS  todo40% of total,plus.dots
        <ModuleControlButtons />
      </div>
      <ul className="wd-assigns list-group rounded-0">
        <li className="wd-assign list-group-item p-3 ps-1">
          <BsGripVertical className="me-2 fs-3" />
          <TfiPencilAlt className="me-3 fs-3 text-success" />
          A1 
          Multiple Modules | <b>Not available until</b> May 6 at 12:00am | <b>Due</b> May 13 at 11:59 | 100 pts
          <AssignmentControlButtons />
        </li>
        <li className="wd-assign list-group-item p-3 ps-1">
        <BsGripVertical className="me-2 fs-3" />
        <TfiPencilAlt className="me-3 fs-3 text-success" />
          A2
          Multiple Modules | <b>Not available until</b> May 6 at 12:00am | <b>Due</b> May 13 at 11:59 | 100 pts
          <AssignmentControlButtons />
        </li>
        <li className="wd-assign list-group-item p-3 ps-1">
        <BsGripVertical className="me-2 fs-3" />
        <TfiPencilAlt className="me-3 fs-3 text-success" />
          A3
          Multiple Modules | <b>Not available until</b> May 6 at 12:00am | <b>Due</b> May 13 at 11:59 | 100 pts
          <AssignmentControlButtons />
        </li>
      </ul>
    </li>
      </ul>





        <ul id="wd-assignment-list">
          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123">
              A1 - ENV + HTML
            </a>
            <div>Multiple Modules | <b>Not available until</b> May 6 at 12:00am | <b>Due</b> May 13 at 11:59 | 100 pts </div>
          </li>

          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123">
              A2 - CSS + BOOTSTRAP
            </a>
            <div>Multiple Modules | <b>Not available until</b> May 13 at 12:00am | <b>Due</b> May 20 at 11:59 | 100 pts </div>
          </li>

          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123">
              A3 - JAVASCRIPT + REACT
            </a>
            <div>Multiple Modules | <b>Not available until</b> May 20 at 12:00am | <b>Due</b> May 27 at 11:59 | 100 pts </div>
          </li>
        </ul>




        
      </div>
  );
  }
  