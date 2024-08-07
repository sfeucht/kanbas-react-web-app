import { Link, useNavigate, useParams } from "react-router-dom";
import EditorTabs from "./EditorTabs";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import * as client from '../client'; 
import EditableQuestion from "./EditableQuestion";
import { setQuizzes } from "../reducer";

export default function QuestionsEditor() {
    const { cid, qid } = useParams(); 
    const navigate = useNavigate(); 
    const dispatch = useDispatch(); 
    const detailsScreen = `/Kanbas/Courses/${cid}/Quizzes/${qid}`;

    const { quizzes } = useSelector((state: any) => state.quizzesReducer);
    const [quiz, setQuiz] = useState(quizzes.find((q : any) => (q._id === qid)))
    const [questions, setQuestions] = useState<any>([]); 

    const saveQuiz = async () => {
        console.log('about to save', quiz); 
        const res = await client.updateQuiz(quiz); 
        if (res && res.acknowledged) {
            const updatedQuizzes = quizzes.map((q: any) => q._id === qid ? quiz : q);
            dispatch(setQuizzes(updatedQuizzes)); 
            navigate(detailsScreen);
        } else {
            // Handle the error case appropriately
            console.error("Failed to update quiz");
        }
    }

    // give to editablequestions to update the overall quiz whenever a question element is updated
    // todo THIS IS WRONG, you need to update all the questions on their own somehow 
    const updateQuizQuestion = (updatedQuestion: any) => {
        const newQuiz = {
            ...quiz,
            questions: quiz.questions.map((q:any) =>
                q._id === updatedQuestion._id ? updatedQuestion : q
            )
        }
        setQuiz(newQuiz); 
        console.log('updateQuizQuestion called'); 
    };

    return (
        <div>
        <EditorTabs />

        <div className="container centered">
            <ul id="wd-modules" className="list-group rounded-0 mt-4">
            {quiz.questions.map((qid: any, index: any) => {return (
                <EditableQuestion qid={{questionId : qid}} index={index} updateQuiz={updateQuizQuestion} />
            )})}
            </ul>

            <button className="btn btn-outline-secondary m-4">+ New Question</button>

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