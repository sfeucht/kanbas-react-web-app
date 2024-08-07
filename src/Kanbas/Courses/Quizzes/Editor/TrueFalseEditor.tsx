
export default function TrueFalseEditor({question, setQuestion} : {question: any, setQuestion: any}) {

    return (
        <div>
            <div className='mb-3'>TODO TRUE FALSE</div>
            <h3>Question:</h3>
            <textarea id="question-text" className="form-control" rows={5} cols={30}
                value={question.questionText}
                onChange={(e) => { console.log('q', question); setQuestion({ ...question, questionText: e.target.value }) }} />
    
            <h3 className='mt-3'>Answers:</h3>
            <ul>
                {console.log(question)}
                {question.options.map((opt: any, idx: number) => (
                    <li key={idx}>{opt}</li>  // Display the options
                ))}
            </ul>
        </div>
        )
    }