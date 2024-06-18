import { FaGear } from "react-icons/fa6";
import { FaFileImport } from "react-icons/fa6";
import { FaFileExport } from "react-icons/fa6";
import { CiFilter } from "react-icons/ci";
import { useParams } from "react-router";
import * as db from "../../Database"; 

export default function Grades() {
    const { cid } = useParams();
    const enrollments = db.enrollments;
    const assignments = db.assignments;
    const grades = db.grades;
    const students = db.users;

    const enrolled = enrollments.filter((enrl) => (enrl.course === cid))
    const courseAssignments = assignments.filter((assign) => assign.course === cid)

    const enrolledGrades = enrolled.map((enrl) => {
        const studentGrades = grades.filter((grade) => grade.student === enrl.user);
        const studentInfo = students.filter((student) => student._id === enrl.user);
        return {
            ...enrl,
            grades: studentGrades,
            student: studentInfo
        };
    })

    console.log(enrolledGrades);


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
                    {courseAssignments.map((assign) => (
                        <th>{assign.title}<br/> Out of {assign.points}</th>
                    ))}
                </tr>
                </thead>
                <tbody>

                {/* Not exactly right because I don't verify that the columns match up */}
                {enrolledGrades.map((obj) => (
                <tr>
                    <td>{obj.student[0].firstName} {obj.student[0].lastName}</td>
                    {obj.grades.map((grade) => (
                        <td>{grade.grade}</td>
                    ))}

                </tr>
                ))}
                </tbody>
            </table>
        </div>
    </div>

    </div>

)}; 