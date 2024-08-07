import { useEffect, useState } from 'react';
import * as client from '../client'; 
import { FaPencilAlt } from 'react-icons/fa';
import MultipleChoiceEditor from './MultipleChoiceEditor';
import TrueFalseEditor from './TrueFalseEditor';
import FillBlanksEditor from './FillBlanksEditor'; 

export default function EditableQuestion({ qid, index, updateQuiz }: { qid: any; index: number; updateQuiz: any}) {
    const questionId = qid.questionId;
    const [question, setQuestion] = useState<any>({});
    const [questionType, setQuestionType] = useState("Multiple Choice");
    const [loading, setLoading] = useState(true);  // Loading state
    const [editing, setEditing] = useState(false);
    
    const getQuizQuestion = async () => {
        console.log('getquizquestion about to getQuestion', questionId); 
        const q = await client.getQuestion(questionId);
        console.log('got question', q); 
        setQuestion(q);
        setLoading(false);  // Set loading to false after fetching data
    };

    const renderSwitch = () => {
        switch (questionType) {
            case "Multiple Choice": 
                return <MultipleChoiceEditor question={question} setQuestion={setQuestion} />;
            case "True/False": 
                return <TrueFalseEditor question={question} setQuestion={setQuestion} />;
            case "Fill-in-the-Blanks":
                return <FillBlanksEditor question={question} setQuestion={setQuestion} />; 
        }
    }

    useEffect(() => {
        getQuizQuestion();
    }, []);

    useEffect(() => {
        updateQuiz(question);
    }, [question]); 

    if (loading) {
        return <div>Loading...</div>;  // Render loading state
    }

    return (
        <div className='wd-module list-group-item p-0 mb-4 fs-5 border-gray w-75'>
            {editing ?
                <li className='wd-module list-group-item p-0 mb-4 fs-5'>
                    <div className="wd-title pb-5 pt-3 ps-3 pe-3 bg-secondary">
                        <div className='float-start'><h3>Question {index + 1}</h3></div>
                        <div className='float-end'><h4>{question.points} Points</h4></div>
                    </div>
                    <div className='float-start p-4'>
                        {question.questionText}
                    </div>
                    <div className='float-end p-4'>
                        <FaPencilAlt />
                    </div>
                </li> :

                <li className='wd-module list-group-item p-3 mb-4 fs-5'>
                    <select className="form-select w-50 float-start" onChange={(e) => setQuestionType(e.target.value)}>
                        <option selected value="Multiple Choice">Multiple Choice</option>
                        <option value="True/False">True/False</option>
                        <option value="Fill-in-the-Blanks">Fill-in-the-Blanks</option>
                    </select>
                    <div className='w-25 float-start text-end pe-2'>pts: </div>
                    <input className='form-control w-25 float-start mb-3' value={question.points}
                    onChange={(e) => setQuestion({...question, points: e.target.value})}></input>

                    {renderSwitch()}


                    
                </li>
            }
        </div>
    );
}
