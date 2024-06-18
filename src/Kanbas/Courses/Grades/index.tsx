import { FaGear } from "react-icons/fa6";
import { FaFileImport } from "react-icons/fa6";
import { FaFileExport } from "react-icons/fa6";
import { CiFilter } from "react-icons/ci";


export default function Grades() {
    return (
    <div>

        <div className="float-end">
        <button className="btn btn-secondary me-2"><FaFileImport /> Import</button>
            <button className="btn btn-secondary dropdown-toggle"><FaFileExport /> Export</button>
            <button className="btn btn-seconary me-1"><FaGear /></button>

        </div>

<br/><br/><br/>
    <div className="container">
        <div className="row">
            <div className="col">
                <label htmlFor="search-students" className="fw-bold">Student Names </label>
                <input id="search-students" type="text" className="form-control mr-sm-2 wd-search-assignment" placeholder="Search Students..."/>
            </div>

            <div className="col">
            <label htmlFor="search-assigns" className="fw-bold">Student Names </label>
                <input id="search-assigns" type="text" className="form-control mr-sm-2 wd-search-assignment" placeholder="Search Assignments..."/>
                
            </div>
        </div>

        <div className="row">
            <div className="col">
            <button className="btn btn-secondary mt-2"><CiFilter /> Apply Filters</button>
            </div>
        </div>

        <div className="row">
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>Student Name</th>
                    <th>A1 SETUP <br/> Out of 100</th>
                    <th>A2 HTML <br/> Out of 100</th>
                    <th>A3 CSS <br/> Out of 100</th>
                    <th>A4 BOOTSTRAP <br/> Out of 100</th>
                </tr>
                </thead>

                <tbody>
                <tr>
                    <td>Jane Adams</td>
                    <td>100%</td>
                    <td>100%</td>
                    <td>100%</td>
                    <td>100%</td>
                </tr>

                <tr>
                    <td>Christina Allen</td>
                    <td>100%</td>
                    <td>100%</td>
                    <td>100%</td>
                    <td>100%</td>
                </tr>

                <tr>
                    <td>Samreen Ansari</td>
                    <td>100%</td>
                    <td>100%</td>
                    <td>100%</td>
                    <td>100%</td>
                </tr>

                <tr>
                    <td>Han Bao</td>
                    <td>100%</td>
                    <td>100%</td>
                    <td>100%</td>
                    <td>100%</td>
                </tr>

                <tr>
                    <td>Mahi Sai Srinivas Bobbili</td>
                    <td>100%</td>
                    <td>100%</td>
                    <td>100%</td>
                    <td>100%</td>
                </tr>


                </tbody>


            </table>

        </div>


    </div>

    </div>

)}; 