import { BsGripVertical } from "react-icons/bs"
import { MdOutlineArrowDropDown } from "react-icons/md";
import { Navigate, useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import * as client from "./client"; 
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import QuizControlButtons from "./QuizControlButtons";
import { setQuizzes } from "./reducer";
import { IoRocketOutline } from "react-icons/io5";


export default function Quizzes() {
    const { cid } = useParams();
    const { quizzes } = useSelector((state: any) => (state.quizzesReducer));

    const dispatch = useDispatch(); 

    const defaultQuiz = {
      "quizType": "Graded Quiz",
      "points": 100,
      "assignmentGroup": "Quizzes",
      "shuffleAnswers": false,
      "timeLimitMinutes": 30,
      "multipleAttempts": true,
      "howManyAttempts": 3,
      "showCorrectAnswers": "Immediately",
      "accessCode": "",
      "oneQuestionAtTime": true,
      "webcamRequired": false,
      "lockQuestionsAfterAnswering": false,
      "dueDate": new Date(),
      "availableDate": new Date(),
      "untilDate": new Date(),
      "courseId": cid, 
      "title": "New Quiz",
      "questions": []
    }

    const fetchQuizzes = async () => {
      const quizzes = await client.findQuizzesForCourse(cid as string);
      dispatch(setQuizzes(quizzes)); 
    };

    const newQuiz = async () => {
      const res = await client.createQuiz(defaultQuiz); 
      const updatedQuizzes = [...quizzes, res]; 
      dispatch(setQuizzes(updatedQuizzes)); 
    }

    const deleteQuiz = () => {
      
    }

    const editQuiz = () => {

    }

    useEffect(() => {
      fetchQuizzes(); 
    }, []); 

    const currDate = new Date(); 

    return (
      <div id="wd-quizzes">
      <div>      
        <div className="wrap float-right mb-2">
        <button id="wd-add-quiz" className="btn btn-lg btn-danger"
        onClick={newQuiz}>
          + Quiz
        </button>
        </div>
      </div>
      
    <ul id="wd-quizzes" className="list-group rounded-0">
          
    <li className="wd-quiz list-group-item p-0 mb-5 fs-5 border-gray">
      <div className="wd-title p-3 ps-2 bg-secondary">
        <BsGripVertical className="me-2 fs-3" />
        <MdOutlineArrowDropDown /> Assignment Quizzes  <div className="wrap p-1 border border-dark rounded-pill">40% of total</div>
      </div>

      <ul className="wd-assigns list-group rounded-0">
        {quizzes
        .filter((q: any) => (q.courseId === cid))
        .map((q: any) => (
        <li className="wd-assign list-group-item p-3 ps-1">
        <div className="wrap">
          <BsGripVertical className="me-2 fs-3" />
          <IoRocketOutline className="wrap me-3 fs-3 text-success" />
          <Link key={`/Kanbas/Courses/${q.courseId}/Quizzes/${q._id}`} to={`/Kanbas/Courses/${q.courseId}/Quizzes/${q._id}`}
          className="link-body-emphasis link-offset-2 link-underline link-underline-opacity-0 fw-bold">{q.title}</Link>
          <br /> <span className="ml-3">
            {(currDate < new Date(q.availableDate)) ? 
                <span><b>Not available until </b> {q.availableDate.slice(0,10)}</span> : 
            (currDate < new Date(q.untilDate)) ?
                <span><b>Available until </b>{q.untilDate.slice(0,10)}</span> : 
                <span><b>Closed</b></span>}  | 
            <b>Due</b> {q.dueDate.slice(0,10)} | 
            {q.points} pts </span>
          </div>
          <QuizControlButtons quizId={q._id} />
        </li>
        )
        )}
        
      </ul>
    </li>
    </ul>
    </div>
  );
  }
  