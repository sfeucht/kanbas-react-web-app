import { Link, useLocation } from "react-router-dom";
import "./index.css";
// import { useLocation } from "react-router";

export default function CoursesNavigation({cid} : {cid: string | undefined}) {
    const { pathname } = useLocation();

    const links = [
      { label: "Home", path: "/Kanbas/Courses/" + cid + "/Home" },
      { label: "Modules",   path: "/Kanbas/Courses/" + cid + "/Modules" },
      { label: "Piazza",  path: "/Kanbas/Courses/" + cid + "/Piazza" },
      { label: "Zoom",     path: "/Kanbas/Courses/" + cid + "/Zoom" },
      { label: "Assignments",      path: "/Kanbas/Courses/" + cid + "/Assignments" },
      { label: "Quizzes",      path: "/Kanbas/Courses/" + cid + "/Quizzes" },
      { label: "Grades",      path: "/Kanbas/Courses/" + cid + "/Grades" },
      { label: "People",      path: "/Kanbas/Courses/" + cid + "/People" },
    ]
  
  
    return (

      <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link key={link.path} to={link.path} id="wd-course-home-link" 
        className={`list-group-item border border-0 ${pathname.includes(link.label) ? "text-dark active" : "text-danger"}`}>
        {link.label}
        </Link>
      ))}
      </div>
      


      // <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
      //   <a id="wd-course-home-link" href="#/Kanbas/Courses/1234/Home"
      //       className="list-group-item active border border-0">Home</a>

      //   <a id="wd-course-modules-link" href="#/Kanbas/Courses/1234/Modules"
      //       className="list-group-item text-danger border border-0">Modules</a>

      //   <a id="wd-course-piazza-link"  href="#/Kanbas/Courses/1234/Piazza"
      //   className="list-group-item text-danger border border-0">Piazza</a>

      //   <a id="wd-course-zoom-link"    href="#/Kanbas/Courses/1234/Zoom"
      //   className="list-group-item text-danger border border-0">Zoom</a>

      //   <a id="wd-course-quizzes-link" href="#/Kanbas/Courses/1234/Assignments"
      //   className="list-group-item text-danger border border-0">Assignments</a>

      //   <a id="wd-course-assignments-link" href="#/Kanbas/Courses/1234/Quizzes"
      //   className="list-group-item text-danger border border-0">Quizzes</a>
        
      //   <a id="wd-course-grades-link"  href="#/Kanbas/Courses/1234/Grades"
      //   className="list-group-item text-danger border border-0">Grades</a>
      // </div>


  );}
  