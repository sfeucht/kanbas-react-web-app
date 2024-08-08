import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router";
import * as client from './client'; 
import { Link } from "react-router-dom";
import EditableQuestion from "./Editor/EditableQuestion";
import QuestionScored from "./QuestionScored";

export default function QuizFinished() {
    const { currUser } = useSelector((state: any) => state.accountReducer); 
    const { cid, qid } = useParams(); 
    const detailsScreen = `/Kanbas/Courses/${cid}/Quizzes/${qid}`;

    const { quizzes } = useSelector((state: any) => state.quizzesReducer);
    const quiz = quizzes.find((q : any) => (q._id === qid));
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

    return ( 
        <div>
        
        <div className="container centered">
            <ul id="wd-modules" className="list-group rounded-0 mt-4">
            {questions.map((q: any, index: any) => {return (
                <QuestionScored question={q} index={index} />
            )})}
            </ul>

            <hr />
            <Link to={detailsScreen} >
            <button className="btn btn-primary float-end wd-delete"> Done </button>
            </Link>

        </div>
        </div>
    )

}
