
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router"
import { Link } from "react-router-dom";

export default function QuizDetails() {
    const { cid, qid } = useParams(); 
    const { currentUser } = useSelector((state: any) => state.accountReducer); 

    const { quizzes } = useSelector((state: any) => state.quizzesReducer);
    // const quiz = quizzes.find((q : any) => (q._id === qid))
    
    const [loading, setLoading] = useState(true);
    const [quiz, setQuiz] = useState<any>(null);

    useEffect(() => {
        const foundQuiz = quizzes.find((q: any) => q._id === qid);
        if (foundQuiz) {
            setQuiz(foundQuiz);
            setLoading(false);
        } else {
            // If the quiz is not found, you might want to fetch it from the server or handle the missing data
            console.log('Quiz not found:', quizzes, qid);
            setLoading(false);
        }
    }, [quizzes, qid]);


    if (loading) {
        return <div>Loading...</div>; // or any loading indicator
    }
    if (!quiz) {
        return <div>Quiz not found.</div>; // Handle the case where the quiz is not found
    }
    
    return (
        <div>
            <h1>{quiz.title}</h1>
            <table className="table w-50 m-4">
                <tr className="row">
                    <td className="col fw-bold text-end">Quiz Type</td>
                    <td className="col">{quiz.quizType}</td>
                </tr> 
                <tr className="row">
                    <td className="col fw-bold text-end">Points</td>
                    <td className="col">{quiz.points}</td>
                </tr> 
                <tr className="row">
                    <td className="col fw-bold text-end">Assignment Group</td>
                    <td className="col">{quiz.assignmentGroup}</td>
                </tr> 
                <tr className="row">
                    <td className="col fw-bold text-end">Shuffle Answers</td>
                    <td className="col">{quiz.shuffleAnswers ? "Yes" : "No"}</td>
                </tr> 
                <tr className="row">
                    <td className="col fw-bold text-end">Time Limit</td>
                    <td className="col">{quiz.timeLimitMinutes} minutes</td>
                </tr> 
                <tr className="row">
                    <td className="col fw-bold text-end">Multiple Attempts</td>
                    <td className="col">{quiz.multipleAttempts ? "Yes" : "No"}</td>
                </tr> 
                <tr className="row">
                    <td className="col fw-bold text-end">Show Correct Answers</td>
                    <td className="col">{quiz.showCorrectAnswers}</td>
                </tr> 
                <tr className="row">
                    <td className="col fw-bold text-end">One Question at a Time</td>
                    <td className="col">{quiz.oneQuestionAtTime ? "Yes" : "No"}</td>
                </tr> 
                <tr className="row">
                    <td className="col fw-bold text-end">Require Respondus LockDown Browser</td>
                    <td className="col">{quiz.accessCode.length > 0 ? "Yes" : "No"}</td>
                </tr> 
                <tr className="row">
                    <td className="col fw-bold text-end">Webcam Required</td>
                    <td className="col">{quiz.webcamRequired ? "Yes" : "No"}</td>
                </tr> 
                <tr className="row">
                    <td className="col fw-bold text-end">Lockdown After Answering</td>
                    <td className="col">{quiz.lockQuestionsAfterAnswering ? "Yes" : "No"}</td>
                </tr> 
            </table> 

        <div className="container w-75 float-start">
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Due</th>
                    <th scope="col">For</th>
                    <th scope="col">Available From</th>
                    <th scope="col">Available Until</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">{new Date(quiz.dueDate).toDateString()}<br/>{new Date(quiz.dueDate).toLocaleTimeString()}</th>
                    <td>Everyone</td>
                    <td>{new Date(quiz.availableDate).toDateString()}<br/>{new Date(quiz.availableDate).toLocaleTimeString()}</td>
                    <td>{new Date(quiz.untilDate).toDateString()}<br/>{new Date(quiz.untilDate).toLocaleTimeString()}</td>
                    </tr>
                </tbody>
            </table>
            <div className="text-center m-2">
                { currentUser.role === "FACULTY" ? 
                <div className="float-end">
                <Link to={`/Kanbas/Courses/${cid}/Quizzes/${qid}/0`}> 
                    <button className="btn btn-outline-secondary m-1">Preview</button>
                </Link>
                <Link to={`/Kanbas/Courses/${cid}/Quizzes/${qid}/edit/details`} >
                    <button className="btn btn-outline-secondary m-1">Edit</button>
                </Link>
                </div> : 
                <Link to={`/Kanbas/Courses/${cid}/Quizzes/${qid}/0`}> 
                    <button className="btn btn-primary">
                        Take Quiz
                    </button>
                </Link>
                }
            </div>
            </div>
        </div>
    )
}