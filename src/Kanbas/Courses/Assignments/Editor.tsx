import { useParams } from "react-router";
import * as db from "../../Database"; 
import { Link } from "react-router-dom";

export default function AssignmentEditor() {
    const { cid, id } = useParams();
    const assign = db.assignments.filter((assign) => (assign.course == cid && assign._id == id))[0]

    console.log(cid, id);
    console.log("assign", assign);

    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <div><input id="wd-name" className="form-control" value={assign.title} /></div>
        <br /><br />
        <textarea id="wd-description" className="form-control" rows={10} cols={40}>
        {assign.description}
        </textarea>
        <br />

<div className="container">
    <div className="row mb-3">
        <div className="col-sm-3 text-end align-top">
            <label htmlFor="wd-points" className="form-label text-secondary">Points</label>
        </div>
        <div className="col-sm-9">
            <input id="wd-points" className="form-control" value={assign.points} />
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
                        <input type="date" id="wd-due-date" value={assign.dueDate} className="form-control" />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label htmlFor="wd-available-from" className="form-label fw-bold">Available from</label>
                        <input type="date" id="wd-available-from" className="form-control" value={assign.availableDate} />
                    </div>
                    <div className="col">
                        <label htmlFor="wd-available-until" className="form-label fw-bold">Until</label>
                        <input type="date" id="wd-available-until" className="form-control" value={assign.availableToDate} />
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
            <Link key={`/Kanbas/Courses/${cid}/Assignments`} to={`/Kanbas/Courses/${cid}/Assignments`}><button id="wd-cancel" type="button" className="btn btn-secondary me-2">Cancel</button></Link>
            <Link key={`/Kanbas/Courses/${cid}/Assignments`} to={`/Kanbas/Courses/${cid}/Assignments`}><button id="wd-save" type="button" className="btn btn-primary">Save</button></Link>
        </div>
    </div>
</div>

      </div>
  );}
  