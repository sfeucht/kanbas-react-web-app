export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <div><input id="wd-name" className="form-control" value="A1 - ENV + HTML" /></div>
        <br /><br />
        <textarea id="wd-description" className="form-control" rows={10} cols={40}>
        The assignment is available online.
        Submit a link to the landing page of your Web application running on Netlify.

        The landing page should include the following:

        Your full name and section
        Links to each of the lab assignments
        Link to the Kanbas application
        Links to all relevant source code repositories
        The Kanbas application should include a link to navigate back to the landing page.
        </textarea>
        <br />
        {/* <table>
     
     
     <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points" className="form-label text-secondary">Points</label>
            </td>
            <td>
              <input id="wd-points" className="form-control" value={100} />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group" className="form-label text-secondary">Assignment Group</label>
            </td>
            <td>
                <select id="wd-group" className="form-control">
                    <option>ASSIGNMENTS</option>
                </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as" className="form-label text-secondary">Display Grade As</label>
            </td>

            <td>
                <select id="wd-display-grade-as" className="form-control">
                    <option>Percentage</option>
                </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type" className="form-label text-secondary">Submission Type</label>
            </td>
            <td>
              <form className="border p-3">
                <select id="wd-submission-type" className="form-control">
                    <option>Online</option>
                </select>

                <p className="fw-bold">Online Entry Options</p>
                
                <div id="wd-editor-checks" className="form-check">
                <input type="checkbox" id="wd-text-entry" className="form-check-input" value="text-entry" />
                <label htmlFor="wd-text-entry" className="form-check-label" >Text Entry</label><br/>
                <input type="checkbox" id="wd-website-url" className="form-check-input" value="website-url" />
                <label htmlFor="wd-website-url" className="form-check-label">Website URL</label><br/>
                <input type="checkbox" id="wd-media-recordings" className="form-check-input" value="media-recordings" />
                <label htmlFor="wd-media-recordings" className="form-check-label">Media Recordings</label><br/>
                <input type="checkbox" id="wd-student-annotation" className="form-check-input" value="student-annotation" />
                <label htmlFor="wd-student-annotation" className="form-check-label">Student Annotation</label><br/>
                <input type="checkbox" id="wd-file-upload" className="form-check-input" value="file-upload" />
                <label htmlFor="wd-file-upload" className="form-check-label">File Uploads</label><br/>
                </div>
                </form>
              
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign-to" className="form-label text-secondary">Assign</label>
            </td>
            <td>
              <form className="border p-2">
                <div><label htmlFor="wd-assign-to" className="form-label fw-bold">Assign to</label></div>
                <input id="wd-assign-to" value={"Everyone"} className="form-control" />

                <table>
                    <tr>
                    <p><div><label htmlFor="wd-due-date" className="form-label fw-bold"> Due </label></div>
                    <input type="date" id="wd-due-date" value="2024-05-13" className="form-control"/></p><br/>
                    </tr>
                    <tr>
                        <td>
                            <div><label htmlFor="wd-available-from" className="form-label fw-bold">Available from</label></div>
                            <input type="date" id="wd-available-from" className="form-control" value="2024-05-06"/>
                        </td>
                        <td>
                            <div><label htmlFor="wd-available-until" className="form-label fw-bold">Until</label></div>
                            <input type="date" id="wd-available-until" className="form-control" value="2024-05-20"/>
                        </td>
                    </tr>
                </table>
                </form>
            </td>
          </tr> 
          <tr>
            <td>
                <hr></hr>
            </td>
            <td>
                <hr></hr>
            </td>

          </tr>
          <tr>
                <td></td>
                <td align="right">
                    <button id="wd-cancel" onClick={() => alert("Not Implemented!")} type="button">
                    Cancel
                    </button>   
                    <button id="wd-save" onClick={() => alert("Not Implemented!")} type="button">
                    Save 
                    </button>
                </td>
            
            </tr>
          
        </table>

        

        <table>
            
        </table> */}

<div className="container">
    <div className="row mb-3">
        <div className="col-sm-3 text-end align-top">
            <label htmlFor="wd-points" className="form-label text-secondary">Points</label>
        </div>
        <div className="col-sm-9">
            <input id="wd-points" className="form-control" value="100" />
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
                        <input type="date" id="wd-due-date" value="2024-05-13" className="form-control" />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label htmlFor="wd-available-from" className="form-label fw-bold">Available from</label>
                        <input type="date" id="wd-available-from" className="form-control" value="2024-05-06" />
                    </div>
                    <div className="col">
                        <label htmlFor="wd-available-until" className="form-label fw-bold">Until</label>
                        <input type="date" id="wd-available-until" className="form-control" value="2024-05-20" />
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
            <button id="wd-cancel" type="button" className="btn btn-secondary me-2">Cancel</button>
            <button id="wd-save" type="button" className="btn btn-primary">Save</button>
        </div>
    </div>
</div>


        




      </div>
  );}
  