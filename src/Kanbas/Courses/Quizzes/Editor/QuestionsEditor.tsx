import { Link, useNavigate, useParams } from "react-router-dom";
import EditorTabs from "./EditorTabs";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import * as client from '../client'; 
import EditableQuestion from "./EditableQuestion";
import { setQuizzes } from "../reducer";

export default function QuestionsEditor() {
    const { cid, qid } = useParams(); 
    const navigate = useNavigate(); 
    const dispatch = useDispatch(); 
    const detailsScreen = `/Kanbas/Courses/${cid}/Quizzes/${qid}`;

    const { quizzes } = useSelector((state: any) => state.quizzesReducer);
    const quiz = quizzes.find((q : any) => (q._id === qid))
    const [questions, setQuestions] = useState<any>([]); 

    // load in all the questions 
    const getQuizQuestions = async () => {
        if (!quiz) return;

        const fetchedQuestions = [];
        for (const questionId of quiz.questions) {
            const q = await client.getQuestion(questionId);
            fetchedQuestions.push(q);
        }
        setQuestions(fetchedQuestions);
    };

    useEffect(() => {
        getQuizQuestions(); 
    }, [quiz]); 

    const updateQuizQuestion = (updatedQuestion: any) => {
        setQuestions((prevQuestions: any) =>
            prevQuestions.map((q: any) =>
                q._id === updatedQuestion._id ? updatedQuestion : q
            )
        );
        console.log('updated questions with', updatedQuestion); 
    };

    const newQuestion = async (type: String) => {
        const base = {
            quizId : qid, 
            courseId : cid,
            points: 10,
            questionType: type
        }

        let dummy; 
        switch (type) {
            case 'Multiple Choice':
                dummy = {...base, questionText: "Some text", options: [], correctAnswers: []} ; 
                break 
            case 'True/False':
                dummy = {...base, questionText: "Some text", correctAnswer: true} ;  
                break 
            case 'Fill-in-the-Blanks':
                dummy = {...base, questionText: "Some text", possibleAnswers: []} ; 
        }

        const res = await client.createQuestion(dummy); 
        const newQuestions = [...questions, res];  
        setQuestions(newQuestions); 

        // add quiz id to list 
        dispatch(
            setQuizzes(quizzes.map((q : any) => 
            (q._id === qid ? {...q, questions: [...q.questions, res._id]} : q)
            ))
        ); 

    }


    const saveQuiz = async () => {
        // loop through all the questions and update them on server 
        for (const question of questions) {
            console.log('putting', question); 
            const res = await client.updateQuestion(question);
            console.log(res); 
        }
        navigate(detailsScreen); 
    }

    return (
        <div>
        <EditorTabs />

        <div className="container centered">
            <ul id="wd-modules" className="list-group rounded-0 mt-4">
            {questions.map((q: any, index: any) => {return (
                <EditableQuestion question={q} index={index} updateQuestion={updateQuizQuestion}  />
            )})}
            </ul>

            {/* <button className="btn btn-outline-secondary m-4"
            onClick={newQuestion}>
                + New Question
            </button> */}

            <div className="dropdown btn btn-secondary m-1 p-0">
            <button id="wd-publish-all-btn" className="btn btn-lg btn-secondary dropdown-toggle"
            type="button" data-bs-toggle="dropdown">
            + New Question
            </button>
            <ul className="dropdown-menu">
            <li className="dropdown-item">
                <span onClick={(e) => newQuestion('Multiple Choice')}>Multiple Choice</span>
            </li>
            <li className="dropdown-item">
                <span onClick={(e) => newQuestion('True/False')}>True/False</span>
            </li>
            <li className="dropdown-item">
                <span onClick={(e) => newQuestion('Fill-in-the-Blanks')}>Fill-in-the-Blanks</span>
            </li>
            </ul>
            </div>

            <hr />
            <button className="btn btn-primary float-end wd-delete" 
            onClick={saveQuiz}> Save </button>
        <Link to={detailsScreen}>
            <button className="btn btn-secondary float-start float-end me-2"> Cancel </button>
        </Link>

        </div>
        </div>
    )

}