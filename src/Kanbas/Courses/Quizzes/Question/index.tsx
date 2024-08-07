import { useParams } from "react-router";
import * as client from "../client"; 
import { useEffect, useState } from "react";
import MultipleChoice from "./MultipleChoice";
import { Link } from "react-router-dom";

export default function Question() {
    const { cid, qid, index } = useParams(); 
    const [question, setQuestion] = useState<any>({});
    const [quiz, setQuiz] = useState<any>({}); 
    const [loading, setLoading] = useState<boolean>(true);

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

    const nextQuestion = Number(index) + 1; 

    const renderSwitch = (q: any) => {
      switch(q.questionType) {
        case 'Multiple Choice':
          return <MultipleChoice options={q.options} />;
        case 'True/False':
          return 'tf';
        default:
          return 'asdf'; 
      }
    };

    useEffect(() => {
      getQuizQuestion(); 
    }, []); 

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
          {nextQuestion > quiz.questions.length ? 
          <Link to={`/Kanbas/Courses/${cid}/Quizzes/${qid}/${nextQuestion}`}>
            <button className="btn btn-primary">Next ▸</button>
          </Link> :
          <Link to={`/Kanbas/Courses/${cid}/Quizzes/${qid}/finished`}>
            <button className="btn btn-primary">Finish</button>
          </Link>
          } 
        </div>
        
        {Number(index) > 0 ? 
        <div className="mt-5 ml-4 float-start">
          <button className="btn btn-primary">◂ Prev</button>
        </div> : <span></span>}
        </div>
        </div>
    )
}
