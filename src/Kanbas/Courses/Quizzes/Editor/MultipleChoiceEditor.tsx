import { useEffect, useState } from "react";

export default function MultipleChoiceEditor({question, setQuestion} : {question: any, setQuestion: any}) {

    const [correctAnswers, setCorrectAnswers] = useState(question.correctAnswers); 

    // add or remove from list 
    const changeAnswerCorrect = (option: any, checked: any) => {
        if (checked) {
            if (!correctAnswers.includes(option)) {
                setCorrectAnswers([...correctAnswers, option]);
            }
        } else {
            if (correctAnswers.includes(option)) {
                const filtered = correctAnswers.filter((a: any) => a !== option); 
                setCorrectAnswers(filtered); 
            }
        }
    }

    useEffect(() => {
        console.log('correctAnswers changed:', correctAnswers);
    }, [correctAnswers]);

    return (
        <div>
            <div className='mb-3'>Enter your question and multiple answers, then select the one correct answer.</div>
            <h3>Question:</h3>
            <textarea id="question-text" className="form-control" rows={5} cols={30}
                value={question.questionText}
                onChange={(e) => { setQuestion({ ...question, questionText: e.target.value }) }} />

            <h3 className='mt-3'>Answers:</h3>
            <span>Check box if answer is correct.</span>
            <ul className="list-unstyled">
                {question.options.map((opt: any, idx: number) => (
                    <div className="form-check">
                    <input className="form-check-input" type='checkbox' checked={correctAnswers.includes(opt)}
                    onChange={(e) => changeAnswerCorrect(opt, e.target.checked)} />
                    <li key={idx}><input className="form-control mt-3 w-25" value={opt} /></li>
                    </div>  // Display the options
                ))}
            </ul>
            <button className="btn btn-outline-secondary m-4" >+ New Option</button>
        </div>
        )
}