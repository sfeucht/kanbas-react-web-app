import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Grades from "./Grades"; 
import Assignments from "./Assignments";
import { Routes, Route, Navigate, useParams, useLocation } from "react-router";
import AssignmentEditor from "./Assignments/Editor";
import { FaAlignJustify } from "react-icons/fa";
import PeopleTable from "./People/Table";
import Quizzes from "./Quizzes";
import QuizDetails from "./Quizzes/QuizDetails";
import Question from "./Quizzes/Question";
import QuizFinished from "./Quizzes/QuizFinished";
import DetailsEditor from "./Quizzes/Editor/DetailsEditor";
import QuestionsEditor from "./Quizzes/Editor/QuestionsEditor";

export default function Courses({ courses }: { courses: any[]; }) {
    const { cid } = useParams();
    const course = courses.find((course) => course._id === cid);
    const { pathname } = useLocation();
    
    return (
      <div id="wd-courses">
        <h2 className="text-danger"><FaAlignJustify className="me-4 fs-4 mb-1" />
            {course && course.name} &gt; {pathname.split("/")[4]}</h2>
        <hr />
        <div className="d-flex">
            <div className="d-none d-md-block">
                <CoursesNavigation cid={cid} />
            </div>
            <div className="flex-fill">
                <Routes>
                    <Route path="/" element={<Navigate to="Home" />} />
                    <Route path="Home" element={<Home />} />
                    <Route path="Modules" element={<Modules />} />
                    <Route path="Assignments" element={<Assignments />} />
                    <Route path="Assignments/:id" element={<AssignmentEditor />} />
                    <Route path="Grades" element={<Grades />} />
                    <Route path="People" element={<PeopleTable />} />
                    <Route path="People/:uid" element={<PeopleTable />} />
                    <Route path="Quizzes/" element={<Quizzes />} />
                    <Route path="Quizzes/:qid" element={<QuizDetails />} />
                    <Route path="Quizzes/:qid/edit/details" element={<DetailsEditor />} />
                    <Route path="Quizzes/:qid/edit/questions" element={<QuestionsEditor />} />
                    <Route path="Quizzes/:qid/finished" element={<QuizFinished />} />
                    <Route path="Quizzes/:qid/:index" element={<Question />} />
                </Routes>
            </div>
        </div>
      </div>
  );}
  