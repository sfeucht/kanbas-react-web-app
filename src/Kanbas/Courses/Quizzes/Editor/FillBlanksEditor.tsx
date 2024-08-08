import { useState } from "react";

export default function FillBlanksEditor({question, updateQuestion} : {question: any, updateQuestion: any}) {
    const [possibleAnswers, setPossibleAnswers] = useState(question.possibleAnswers); 

    const onAnswerChange = (e: any, ans: any) => {
        setPossibleAnswers((oldPossibleAnswers : any) => {
            const newPossibleAnswers = oldPossibleAnswers.map(
                (a: any) => (a === ans ? e.target.value : a)
            );
            // update the question state with the new possible answers
            updateQuestion({ ...question, possibleAnswers: newPossibleAnswers });
            return newPossibleAnswers;
        }); 
    }

    const addPossibleAnswer = () => {
        let newPossibleAnswers;  
        setPossibleAnswers((oldPossibleAnswers : any) => {
            newPossibleAnswers = [...oldPossibleAnswers, "New Answer"]; 
            updateQuestion({ ...question, possibleAnswers: newPossibleAnswers });
            return newPossibleAnswers; 
        }); 
    }

    return (
        <div>
            <div className='mb-3'>Write a prompt with one blank, and provide several valid things that could go in that blank.</div>
            <h3>Question:</h3>
            <textarea id="question-text" className="form-control" rows={5} cols={30}
                value={question.questionText}
                onChange={(e) => {updateQuestion({ ...question, questionText: e.target.value }) }} />
    
            <h3 className='mt-3'>Possible Answers:</h3>
            {possibleAnswers.map((ans: any) => (
                <div>
                    <span>Possible Answer:</span>
                    <input className="form-control" value={ans}
                    onChange={(e) => (onAnswerChange(e, ans))} />
                </div>
            ))}
            <button className="btn btn-outline-secondary m-4" 
            onClick={addPossibleAnswer}>
                + Possible Answer
            </button>
        </div>
        )
    }