import { useNavigate, useParams } from "react-router";
import * as client from "../client"; 
import { useEffect, useState } from "react";
import MultipleChoice from "./MultipleChoice";
import { Link } from "react-router-dom";
import TrueFalse from "./TrueFalse";
import FillInBlank from "./FillInBlank";
import { useSelector } from "react-redux";

export default function Question() {
    const { cid, qid, index } = useParams(); 
    const [question, setQuestion] = useState<any>({});
    const [quiz, setQuiz] = useState<any>({}); 
    const [loading, setLoading] = useState<boolean>(true);
    const [navigatePath, setNavigatePath] = useState<string | null>(null);

    const navigate = useNavigate(); 

    const nextQuestion = Number(index) + 1; 
    const prevQuestion = Number(index) - 1; 

    const getQuizQuestion = async () => {
      try {
        // retrieve quiz  
        const quizzes = await client.findQuizzesForCourse(cid as string);
        const theQuiz = quizzes.find((quiz: any) => quiz._id === qid);
        setQuiz(theQuiz); 
        
        // get question id 
        const questionId = theQuiz.questions[Number(index)]; 
        const q = await client.getQuestion(questionId); 
        setQuestion(q); 
      } catch (error) {
        console.error("Failed to fetch quiz question:", error);
      } finally {
        setLoading(false);
      }
    }

    // get current user 
    const { currentUser } = useSelector((state: any) => state.accountReducer);

    const updateStudentAnswer = (userAnswer: any) => { 
      console.log('userAnswer', userAnswer); 

      const currUserId = currentUser._id; 
      let prevNoAttempts = question.userAttempts[currUserId]; 

      if (prevNoAttempts == null) {
        prevNoAttempts = 0; 
      }

      const newUserAnswers = {...question.userAnswers, [currUserId] : userAnswer}; 
      const newUserAttempts = {...question.userAttempts, [currUserId] : prevNoAttempts + 1}; 

      setQuestion({...question, userAnswers: newUserAnswers, userAttempts : newUserAttempts}); 
    }

    const renderSwitch = (q: any) => {
      switch(q.questionType) {
        case 'Multiple Choice':
          return <MultipleChoice options={q.options} updateAnswer={updateStudentAnswer} />;
        case 'True/False':
          return <TrueFalse updateAnswer={updateStudentAnswer}/>;
        default:
          return <FillInBlank updateAnswer={updateStudentAnswer}/>; 
      }
    };

    const saveAndNavigate = async (path: string) => {
      const res = await client.updateQuestion(question);
      console.log(res); 
      navigate(path); 
    }

    useEffect(() => {
      setLoading(true);
      getQuizQuestion(); 
    }, [index]); 


    if (loading) {
      return <div>Loading...</div>;
    }

    return (
        <div>
        <div className="container border w-75 m-5 p-4">
        <h1>{`Question ${nextQuestion}`}</h1>
        <h5>{question.questionText}</h5>
        <div className="container m-1">{renderSwitch(question)}</div>
        <div className="mt-5 mr-4 float-end">
          { (nextQuestion < quiz.questions.length) ? 
          <button className="btn btn-primary"
          onClick={(e: any) => saveAndNavigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}/${nextQuestion}`)}>Next ▸</button> :
          <button className="btn btn-primary"
          onClick={(e: any) => saveAndNavigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}/finished`)}>Finish</button>
          } 
        </div>
        
        {Number(index) > 0 ? 
        <div className="mt-5 ml-4 float-start">
          <button className="btn btn-primary"
          onClick={(e: any) => saveAndNavigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}/${prevQuestion}`)}>◂ Prev</button>
        </div> : <span></span>}
        </div>
        </div>
    )
}