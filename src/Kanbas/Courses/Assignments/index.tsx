import { BsGripVertical } from "react-icons/bs"
import ModuleControlButtons from "./ModuleControlButtons"
import AssignmentControlButtons from "./AssignmentControlButtons"
import { TfiPencilAlt } from "react-icons/tfi";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";


export default function Assignments() {
    const { cid } = useParams();
    const { assignments } = useSelector((state: any) => (state.assignmentsReducer));
  
    return (
      <div id="wd-assignments">
      <div>
        <input id="form-control mr-sm-2 wd-search-assignment"
               placeholder="Search..." />
      
        <div className="wrap float-right">
        <button id="wd-add-assignment-group" className="btn btn-lg btn-secondary m-3">+ Group</button>
        <Link to={`new`}><button id="wd-add-assignment" className="btn btn-lg btn-danger">+ Assignment</button></Link>
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
          <br /> Multiple Modules | <b>Not available until</b> {assign.availableDate} | <b>Due</b> {assign.dueDate} | {assign.points} pts
          </div>
          <AssignmentControlButtons assignId={assign._id} />
        </li>
        ))}
      </ul>


    </li>
      </ul>
        
      </div>
  );
  }
  