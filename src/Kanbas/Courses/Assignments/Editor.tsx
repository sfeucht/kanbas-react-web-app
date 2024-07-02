import { useParams } from "react-router";
import * as db from "../../Database"; 
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";

export default function AssignmentEditor() {
    const { cid, id } = useParams();
    const dispatch = useDispatch(); 

    const { assignments } = useSelector((state: any) => state.assignmentsReducer);

    const initializeAssignment = () => {
        if (id === "new") {
            return {
                _id: "new", 
                title: "New Assignment", 
                course: cid,
                description: "Assignment Description",
                points: 100,
                dueDate: "2000-01-01",
                availableDate: "2000-01-01",
                availableToDate: "2000-01-01"
            };
        } else {
            return assignments.find((a: any) => a.course === cid && a._id === id) || {
                _id: "",
                title: "",
                course: "",
                description: "",
                points: 0,
                dueDate: "",
                availableDate: "",
                availableToDate: ""
            };
        }
    };

    const [assign, setAssign] = useState(initializeAssignment);

    const onSave = (assign: any) => {
        if (id === "new") {
            dispatch(addAssignment(assign));
        } else {
            dispatch(updateAssignment(assign)); 
        }
    }
    

    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <div><input id="wd-name" className="form-control" value={assign.title}
        onChange={(e) => setAssign({...assign, title: e.target.value})} /></div>
        <br /><br />
        <textarea id="wd-description" className="form-control" rows={10} cols={40} 
            value={assign.description}
            onChange={(e) => setAssign({...assign, description: e.target.value})}/>
        <br />

<div className="container">
    <div className="row mb-3">
        <div className="col-sm-3 text-end align-top">
            <label htmlFor="wd-points" className="form-label text-secondary">Points</label>
        </div>
        <div className="col-sm-9">
            <input id="wd-points" className="form-control" value={assign.points} type="number"
            onChange={(e) => setAssign({...assign, points: parseInt(e.target.value)})}/>
        </div>
    </div>
    <div className="row mb-3">
        <div className="col-sm-3 text-end align-top">
            <label htmlFor="wd-group" className="form-label text-secondary">Assignment Group</label>
        </div>
        <div className="col-sm-9">
            <select id="wd-group" className="form-control">
                <option>ASSIGNMENTS</option>
            </select>
        </div>
    </div>
    <div className="row mb-3">
        <div className="col-sm-3 text-end align-top">
            <label htmlFor="wd-display-grade-as" className="form-label text-secondary">Display Grade As</label>
        </div>
        <div className="col-sm-9">
            <select id="wd-display-grade-as" className="form-control">
                <option>Percentage</option>
            </select>
        </div>
    </div>
    <div className="row mb-3">
        <div className="col-sm-3 text-end align-top">
            <label htmlFor="wd-submission-type" className="form-label text-secondary">Submission Type</label>
        </div>
        <div className="col-sm-9">
            <form className="border p-3">
                <select id="wd-submission-type" className="form-control mb-3">
                    <option>Online</option>
                </select>
                <p className="fw-bold">Online Entry Options</p>
                <div id="wd-editor-checks" className="form-check">
                    <input type="checkbox" id="wd-text-entry" className="form-check-input" value="text-entry" />
                    <label htmlFor="wd-text-entry" className="form-check-label">Text Entry</label><br />
                    <input type="checkbox" id="wd-website-url" className="form-check-input" value="website-url" />
                    <label htmlFor="wd-website-url" className="form-check-label">Website URL</label><br />
                    <input type="checkbox" id="wd-media-recordings" className="form-check-input" value="media-recordings" />
                    <label htmlFor="wd-media-recordings" className="form-check-label">Media Recordings</label><br />
                    <input type="checkbox" id="wd-student-annotation" className="form-check-input" value="student-annotation" />
                    <label htmlFor="wd-student-annotation" className="form-check-label">Student Annotation</label><br />
                    <input type="checkbox" id="wd-file-upload" className="form-check-input" value="file-upload" />
                    <label htmlFor="wd-file-upload" className="form-check-label">File Uploads</label><br />
                </div>
            </form>
        </div>
    </div>
    <div className="row mb-3">
        <div className="col-sm-3 text-end align-top">
            <label htmlFor="wd-assign-to" className="form-label text-secondary">Assign</label>
        </div>
        <div className="col-sm-9">
            <form className="border p-3">
                <div className="mb-3">
                    <label htmlFor="wd-assign-to" className="form-label fw-bold">Assign to</label>
                    <input id="wd-assign-to" value="Everyone" className="form-control" />
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <label htmlFor="wd-due-date" className="form-label fw-bold">Due</label>
                        <input type="date" id="wd-due-date" value={assign.dueDate} className="form-control" 
                        onChange={(e) => setAssign({...assign, dueDate: e.target.value})}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label htmlFor="wd-available-from" className="form-label fw-bold">Available from</label>
                        <input type="date" id="wd-available-from" className="form-control" value={assign.availableDate} 
                        onChange={(e) => setAssign({...assign, availableDate: e.target.value})}/>
                    </div>
                    <div className="col">
                        <label htmlFor="wd-available-until" className="form-label fw-bold">Until</label>
                        <input type="date" id="wd-available-until" className="form-control" value={assign.availableToDate}
                        onChange={(e) => setAssign({...assign, availableToDate: e.target.value})} />
                    </div>
                </div>
            </form>
        </div>
    </div>
    <div className="row mb-3">
        <div className="col">
            <hr/>
        </div>
        <div className="col">
            <hr/>
        </div>
    </div>
    <div className="row">
        <div className="col-sm-3"></div>
        <div className="col-sm-9 text-end">
            <Link to={`/Kanbas/Courses/${cid}/Assignments`}>
                <button id="wd-cancel" type="button" className="btn btn-secondary me-2">Cancel</button></Link>
            <Link to={`/Kanbas/Courses/${cid}/Assignments`}>
                <button id="wd-save" type="button" className="btn btn-primary"
                onClick={() => onSave(assign)}>Save</button></Link>
        </div>
    </div>
</div>

      </div>
  );}
  