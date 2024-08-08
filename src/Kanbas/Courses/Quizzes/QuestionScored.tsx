import { useEffect, useState } from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import MultipleChoiceEditor from './Editor/MultipleChoiceEditor';
import TrueFalseEditor from './Editor/TrueFalseEditor';
import FillBlanksEditor from './Editor/FillBlanksEditor'; 
import { useSelector } from 'react-redux';

export default function QuestionScored({ question, index }: 
    { question: any; index: number}) {

    const { currentUser } = useSelector((state: any) => state.accountReducer);

    const isCorrect = (q: any) => {
        const userAns = q.userAnswers[currentUser._id]; 
        console.log(q); 
        switch (q.questionType) {
            case 'Multiple Choice': 
                return q.correctAnswers.includes(userAns); 
            case 'True/False':
                return q.correctAnswer === userAns; 
            case 'Fill-in-the-Blanks':
                return q.possibleAnswers.includes(userAns); 
        }
    }

    const displayAnswers = (q: any) => {
        const userAns = q.userAnswers[currentUser._id]; 

        switch (q.questionType) {
            case 'Multiple Choice': 
            console.log('opts', q.options); 
                return (
                    <div>
                        <ul>{q.options.map((o: any) => (
                            <li className={q.correctAnswers.includes(o) ? 'text-success' : 'text-danger'}>
                                {q.userAnswers[currentUser._id] === o ? '[selected] ' : ''} 
                                {o} - {q.correctAnswers.includes(o) ? 'Correct' : 'Incorrect'}
                            </li>
                        ))}</ul>
                    </div>
                );
            case 'True/False':
                return (
                    <div>
                        <ul>
                        <li className={q.correctAnswer ? 'text-success' : 'text-danger'}>
                            {userAns ? '[you selected] ' : ''} 
                            True - {q.correctAnswer ? 'Correct' : 'Incorrect'}
                        </li>
                        <li className={!q.correctAnswer ? 'text-success' : 'text-danger'}>
                            {!userAns ? '[you selected] ' : ''} 
                            False - {!q.correctAnswer ? 'Correct' : 'Incorrect'}
                        </li>
                        </ul>
                    </div>
                ); 
            case 'Fill-in-the-Blanks':
                return (
                    <div>
                        Possible Answers:
                        <ul>{q.possibleAnswers.map((pa: any) => (
                            <li className='text-success'>
                                {userAns === pa ? '[you wrote] ' : ''} 
                                {pa}
                            </li>
                        ))}</ul>
                        {!q.possibleAnswers.includes(userAns) ? 
                        <div className='text-danger'>You wrote: {userAns}</div> : <span></span>
                        }
                    </div>
                );
        }
    };

    return (
        <div className='wd-module list-group-item p-0 mb-4 fs-5 w-75'>
            <li className='wd-module list-group-item p-0 mb-4 fs-5'>
                <div className="wd-title pb-5 pt-3 ps-3 pe-3 bg-secondary">
                    <div className='float-start'><h3>Question {index + 1}</h3></div>
                    <div className='float-end'><h4>{question.points} Points</h4></div>
                </div>
                <div className='float-start p-4'>
                    {question.questionText}
                    { isCorrect(question) ? 
                    <div className='text-success'>
                        CORRECT
                    </div> : <div className='text-danger'>INCORRECT</div>}
                    { displayAnswers(question) }
                </div>

            </li> 
        </div>
    );
}
