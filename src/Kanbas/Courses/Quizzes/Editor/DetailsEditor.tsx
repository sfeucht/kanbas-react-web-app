import { useNavigate, useParams } from "react-router";
import EditorTabs from "./EditorTabs";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import * as client from '../client'; 
import { setQuizzes } from "../reducer";

export default function DetailsEditor() {
    const { cid, qid } = useParams(); 
    const { quizzes } = useSelector((state: any) => state.quizzesReducer);
    const [quiz, setQuiz] = useState(quizzes.find((q : any) => (q._id === qid)))

    // y did gpt4o say this 
    useEffect(() => {
        setQuiz(quizzes.find((q : any) => (q._id === qid)) || {});
    }, [quizzes, qid]);

    const dispatch = useDispatch(); 
    const navigate = useNavigate(); 
    const detailsScreen = `/Kanbas/Courses/${cid}/Quizzes/${qid}`;

    const saveQuiz = async () => {
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

    return (
        <div>
        <EditorTabs />
        <div className="container">
            <input className="form-control mt-4" value={quiz.title}
            onChange={(e) => setQuiz({ ...quiz, title: e.target.value })} />

            <div className="container mt-3">
                <h5>Quiz Instructions:</h5>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} value={quiz.information}
                onChange={(e) => setQuiz({ ...quiz, information: e.target.value })} />
            </div>

        </div>

        <table className="table w-50 mt-4 ml-1">
            <tr className="row">
                <td className="col fw-bold text-end">Quiz Type</td>
                <td className="col">
                    <select className="form-select" value={quiz.quizType} 
                    onChange={(e) => setQuiz({...quiz, quizType: e.target.value })}>
                        <option value='Graded Quiz'>Graded Quiz</option>
                        <option value="Practice Quiz">Practice Quiz</option>
                        <option value="Graded Survey">Graded Survey</option>
                        <option value="Ungraded Survey">Ungraded Survey</option>
                    </select>
                </td>
            </tr> 
            <tr className="row mt-2">
                <td className="col fw-bold text-end">Assignment Group</td>
                <td className="col">
                    <select className="form-select" value={quiz.assignmentGroup} 
                    onChange={(e) => setQuiz({...quiz, assignmentGroup: e.target.value })}>
                        <option value='Quizzes'>Quizzes</option>
                        <option value="Exams">Exams</option>
                        <option value="Assignments">Assignments</option>
                        <option value="Projects">Projects</option>
                    </select>
                </td>
            </tr>
            <tr className="row mt-3">
                <td className="col"> </td>
                <td className="col">
                    <b>Options</b>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="checkShuffleAnswers" />
                    <label className="form-check-label" htmlFor="checkShuffleAnswers">
                        Shuffle Answers
                    </label>
                    </div>
                    <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="checkTimeLimit" />
                    <label className="form-check-label" htmlFor="checkTimeLimit">
                        Time Limit
                    </label>
                    <input className="form-control mt-1 w-25" value={quiz.timeLimitMinutes}
                    onChange={(e) => setQuiz({ ...quiz, timeLimitMinutes: e.target.value })} />
                    </div>
                    <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="checkTimeLimit" />
                        <label className="form-check-label" htmlFor="checkTimeLimit">
                            Allow Multiple Attempts
                        </label>
                    </div>
                </td>
            </tr>
            <tr className="row mt-2">
                <td className="col fw-bold text-end">Assign</td>
                <td className="col">
                    <div className="container">
                        <h5>Due</h5>
                        <input className="form-control w-100" type="date" value={quiz.dueDate.slice(0,10)}
                        onChange={(e) => setQuiz({ ...quiz, dueDate: e.target.value })} />
                        <div className="mt-3">
                        <div className="float-start">
                        <h5>From</h5>
                        <input className="form-control w-100" type="date" value={quiz.availableDate.slice(0,10)}
                        onChange={(e) => setQuiz({ ...quiz, availableDate: e.target.value })} />
                        </div>
                        <div className="float-end">
                        <h5>Until</h5>
                        <input className="form-control w-100" type="date" value={quiz.untilDate.slice(0,10)} 
                        onChange={(e) => setQuiz({ ...quiz, untilDate: e.target.value })} />
                        </div>
                        </div>
                    </div>
                </td>
            </tr>
        </table>
        <button className="btn btn-primary float-end wd-delete" 
            onClick={saveQuiz}> Save </button>
        <Link to={detailsScreen}>
            <button className="btn btn-secondary float-start float-end me-2"> Cancel </button>
        </Link>

        </div>
    )

}