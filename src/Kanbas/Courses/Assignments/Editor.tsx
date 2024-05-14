export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <div><input id="wd-name" value="A1 - ENV + HTML" /></div>
        <br /><br />
        <textarea id="wd-description" rows={10} cols={40}>
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
        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
                <select id="wd-group">
                    <option>ASSIGNMENTS</option>
                </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade As</label>
            </td>
            <td>
                <select id="wd-display-grade-as">
                    <option>Percentage</option>
                </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
                <select id="wd-submission-type">
                    <option>Online</option>
                </select>

                <p>Online Entry Options</p>
                <input type="checkbox" id="wd-text-entry" value="text-entry" />
                <label htmlFor="wd-text-entry">Text Entry</label><br/>
                <input type="checkbox" id="wd-website-url" value="website-url" />
                <label htmlFor="wd-website-url">Website URL</label><br/>
                <input type="checkbox" id="wd-media-recordings" value="media-recordings" />
                <label htmlFor="wd-media-recordings">Media Recordings</label><br/>
                <input type="checkbox" id="wd-student-annotation" value="student-annotation" />
                <label htmlFor="wd-student-annotation">Student Annotation</label><br/>
                <input type="checkbox" id="wd-file-upload" value="file-upload" />
                <label htmlFor="wd-file-upload">File Uploads</label><br/>

            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign-to">Assign</label>
            </td>
            <td>
                <div><label htmlFor="wd-assign-to">Assign to</label></div>
                <input id="wd-assign-to" value={"Everyone"} />

                <table>
                    <tr>
                    <p><div><label htmlFor="wd-due-date"> Due </label></div>
                    <input type="date" id="wd-due-date" value="2024-05-13"/></p><br/>
                    </tr>
                    <tr>
                        <td>
                            <div><label htmlFor="wd-available-from">Available from</label></div>
                            <input type="date" id="wd-available-from" value="2024-05-06"/>
                        </td>
                        <td>
                            <div><label htmlFor="wd-available-until">Until</label></div>
                            <input type="date" id="wd-available-until" value="2024-05-20"/>
                        </td>
                    </tr>
                </table>
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
            
        </table>

        




      </div>
  );}
  