import { useState } from "react";

export default function TrueFalseEditor({question, updateQuestion} : {question: any, updateQuestion: any}) {
    const [correctAnswer, setCorrectAnswer] = useState(question.correctAnswer); 

    const changeAnswerCorrect = (checked: boolean) => {
        setCorrectAnswer((prevState: any) => {
            if (checked) { 
                return !prevState; 
            }
        });
        // update parent state with the new answers
        updateQuestion({ ...question, correctAnswer: correctAnswer });
    };

    return (
        <div>
            <div className='mb-3'>Enter your question, and select whether the correct answer is true or false.</div>
            <h3>Question:</h3>
            <textarea id="question-text" className="form-control" rows={5} cols={30}
                value={question.questionText}
                onChange={(e) => { console.log('q', question); updateQuestion({ ...question, questionText: e.target.value }) }} />
    
            <h3 className='mt-3'>Answer:</h3>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" 
                checked={question.correctAnswer} id="answerTrue" 
                onChange={(e) => (changeAnswerCorrect(e.target.checked))}/>
                <label className="form-check-label" htmlFor="answerTrue">
                    True
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" 
                checked={!question.correctAnswer} id="answerFalse" 
                onChange={(e) => (changeAnswerCorrect(e.target.checked))}/>
                <label className="form-check-label" htmlFor="answerFalse">
                    False
                </label>
            </div>
        </div>
        )
    }