
export default function TrueFalse({updateAnswer}: {updateAnswer: any}) {

    return (
        // todo save value 
        <div className="form-check">
        <div>
            <input className="form-check-input" type="radio" name='tf' id='true' value='true'
            onChange={(e) => updateAnswer(e.target.value)} />
            <label htmlFor='true'>True</label>
        </div>
        <div>
            <input className="form-check-input" type="radio" name='tf' id='false' value='false' 
            onChange={(e) => updateAnswer(e.target.value)}/>
            <label htmlFor='false'>False</label>
        </div>
        </div>
    )
}