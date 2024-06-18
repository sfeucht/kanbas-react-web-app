import { BsGripVertical } from "react-icons/bs"
import ModuleControlButtons from "./ModuleControlButtons"
import AssignmentControlButtons from "./AssignmentControlButtons"
import { TfiPencilAlt } from "react-icons/tfi";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { useParams } from "react-router";
import * as db from "../../Database"; 
import { Link } from "react-router-dom";

export default function Assignments() {
    const { cid } = useParams();
    const assignments = db.assignments;

    return (
      <div id="wd-assignments">
        
      <div>
        <input id="form-control mr-sm-2 wd-search-assignment"
               placeholder="Search..." />
          {/* <div className="input-group rounded">
        <input type="search" className="form-control rounded sm" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
        <span className="input-group-text border-0" id="search-addon">
          <i className="fas fa-search"></i>
        </span>
      </div> */}
      
        <div className="wrap float-right">
        <button id="wd-add-assignment-group" className="btn btn-lg btn-secondary m-3">+ Group</button>
        <button id="wd-add-assignment" className="btn btn-lg btn-danger">+ Assignment</button>
        </div>
      </div>
      
        <ul id="wd-assignments" className="list-group rounded-0">
          
    <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
      <div className="wd-title p-3 ps-2 bg-secondary">
        <BsGripVertical className="me-2 fs-3" />
        <MdOutlineArrowDropDown /> ASSIGNMENTS  <div className="wrap p-1 border border-dark rounded-pill">40% of total</div>
        <ModuleControlButtons />
      </div>

      <ul className="wd-assigns list-group rounded-0">
        {assignments
        .filter((assign: any) => (assign.course == cid))
        .map((assign: any) => (
        <li className="wd-assign list-group-item p-3 ps-1">
        <div className="wrap">
          <BsGripVertical className="me-2 fs-3" />
          <TfiPencilAlt className="wrap me-3 fs-3 text-success" />
          <Link key={`/Kanbas/Courses/${assign.course}/Assignments/${assign._id}`} to={`/Kanbas/Courses/${assign.course}/Assignments/${assign._id}`}
          className="link-body-emphasis link-offset-2 link-underline link-underline-opacity-0 fw-bold">{assign.title}</Link>
          <br /> Multiple Modules | <b>Not available until</b> May 6 at 12:00am | <b>Due</b> May 13 at 11:59 | 100 pts
          </div>
          <AssignmentControlButtons />
        </li>
        ))}

        {/* // <li className="wd-assign list-group-item p-3 ps-1">
        // <BsGripVertical className="me-2 fs-3" />
        // <TfiPencilAlt className="me-3 fs-3 text-success" />
        // <a className="link-body-emphasis link-offset-2 link-underline link-underline-opacity-0 fw-bold" href="#/Kanbas/Courses/1234/Assignments/123">A2</a> <br/>
        //   Multiple Modules | <b>Not available until</b> May 6 at 12:00am | <b>Due</b> May 13 at 11:59 | 100 pts
        //   <AssignmentControlButtons />
        // </li>
        // <li className="wd-assign list-group-item p-3 ps-1">
        // <BsGripVertical className="me-2 fs-3" />
        // <TfiPencilAlt className="me-3 fs-3 text-success" />
        // <a className="link-body-emphasis link-offset-2 link-underline link-underline-opacity-0 fw-bold" href="#/Kanbas/Courses/1234/Assignments/123">A3</a> <br/>
        //   Multiple Modules | <b>Not available until</b> May 6 at 12:00am | <b>Due</b> May 13 at 11:59 | 100 pts
        //   <AssignmentControlButtons />
        // </li> */}
      </ul>


    </li>
      </ul>
        
      </div>
  );
  }
  