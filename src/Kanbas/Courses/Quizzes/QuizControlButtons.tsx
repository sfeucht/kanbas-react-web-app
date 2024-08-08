import { FaTrash } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { BsPlus } from "react-icons/bs";
import { FaPencil } from "react-icons/fa6";
import { MdOutlineDoNotDisturbAlt } from "react-icons/md";

export default function QuizControlButtons(
  { quiz, deleteQuiz, goEditQuiz, togglePublish }: 
  { quiz: any, deleteQuiz: any, goEditQuiz: any, togglePublish: any} ) {

  return (
    <div className="float-end">
      { quiz.published ? <GreenCheckmark /> : <MdOutlineDoNotDisturbAlt className="text-danger" /> }
      <div className="dropdown d-inline-block p-0">
            <IoEllipsisVertical className="fs-4 dropdown-toggle" data-bs-toggle="dropdown" />
            <ul className="dropdown-menu">
            <li className="dropdown-item" onClick={() => goEditQuiz(quiz)}>
                Edit Quiz
            </li>
            <li className="dropdown-item" onClick={() => deleteQuiz(quiz._id)}>
                Delete Quiz
            </li>
            <li className="dropdown-item" onClick={() => togglePublish(quiz)}>
                Publish/Unpublish Quiz 
            </li>
            </ul>
            </div>
    </div>
);}
