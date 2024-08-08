import { useState } from "react";

export default function FillBlanksEditor({question, updateQuestion} : {question: any, updateQuestion: any}) {

    return (
        <div>
            <div className='mb-3'>TODO FILL BLANKS</div>
            <h3>Question:</h3>
            <textarea id="question-text" className="form-control" rows={5} cols={30}
                value={question.questionText}
                onChange={(e) => { console.log('q', question); updateQuestion({ ...question, questionText: e.target.value }) }} />
    
            <h3 className='mt-3'>Answers:</h3>
        </div>
        )
    }