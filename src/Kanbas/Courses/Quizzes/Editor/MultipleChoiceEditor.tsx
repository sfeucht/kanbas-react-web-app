import { useEffect, useState } from "react";

export default function MultipleChoiceEditor({question, updateQuestion} : {question: any, updateQuestion: any}) {

    const [correctAnswers, setCorrectAnswers] = useState(question.correctAnswers); 

    const changeAnswerCorrect = (option: any, checked: any) => {
        setCorrectAnswers((prevCorrectAnswers: any) => {
            let newAnswers;
            if (checked) {
                if (!prevCorrectAnswers.includes(option)) {
                    newAnswers = [...prevCorrectAnswers, option];
                } else {
                    newAnswers = prevCorrectAnswers;
                }
            } else {
                if (prevCorrectAnswers.includes(option)) {
                    newAnswers = prevCorrectAnswers.filter((a: any) => a !== option);
                } else {
                    newAnswers = prevCorrectAnswers;
                }
            }
            // update parent state with the new answers
            updateQuestion({ ...question, correctAnswers: newAnswers });
            return newAnswers;
        });
    };

    const newOption = () => {
        const newOption = "Option"; 
        updateQuestion({...question, options: [...question.options, newOption]}); 
    }

    const handleOptionChange = (index: number, value: string) => {
        const newOptions = question.options.map((opt: any, idx: number) => idx === index ? value : opt);
        updateQuestion({ ...question, options: newOptions });
    };

    return (
        <div>
            <div className='mb-3'>Enter your question and multiple answers, then select the one correct answer.</div>
            <h3>Question:</h3>
            <textarea id="question-text" className="form-control" rows={5} cols={30}
                value={question.questionText}
                onChange={(e) => updateQuestion({ ...question, questionText: e.target.value })} />

            <h3 className='mt-3'>Answers:</h3>
            <span>Check box if answer is correct.</span>
            <ul className="list-unstyled">
                {question.options.map((opt: any, idx: number) => (
                    <div className="form-check">
                    <input className="form-check-input" type='checkbox' checked={correctAnswers.includes(opt)}
                    onChange={(e) => changeAnswerCorrect(opt, e.target.checked)} />
                    <li key={idx}>
                        <input className="form-control mt-3 w-25" value={opt} 
                        onChange={(e) => handleOptionChange(idx, e.target.value)}/></li>
                    </div> 
                ))}
            </ul>
            <button className="btn btn-outline-secondary m-4" 
            onClick={newOption}>
                + New Option
            </button>
        </div>
        )
}