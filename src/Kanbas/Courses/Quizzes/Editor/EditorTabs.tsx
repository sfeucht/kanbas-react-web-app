import { useLocation, useParams } from "react-router";
import { Link } from "react-router-dom";

export default function EditorTabs() {
  const { pathname } = useLocation();
  const { cid, qid } = useParams(); 

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to={`/Kanbas/Courses/${cid}/Quizzes/${qid}/edit/details`} className={`nav-link ${pathname.includes("details") ? "active" : ""}`}> 
          Details 
        </Link>
      </li>
      <li className="nav-item">
        <Link to={`/Kanbas/Courses/${cid}/Quizzes/${qid}/edit/questions`} className={`nav-link ${pathname.includes("questions") ? "active" : ""}`}>
          Questions
        </Link>
      </li>
    </ul>
  );
}