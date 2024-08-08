
export default function MultipleChoice({options, updateAnswer}: {options: any, updateAnswer: any}) {

    return (

        <div className="form-check">
            {options.map((o: any, idx: any) => 
            <div>
                <input 
                className="form-check-input" 
                name='mc' 
                type="radio" 
                id={`${idx}`} 
                value={`${o}`} 
                onChange={(e) => updateAnswer(e.target.value)}/>
                <label htmlFor={`${idx}`}>{`${o}`}</label>
            </div>
            )}
        </div>


    )
}