
export default function FillInBlank({updateAnswer} : {updateAnswer : any}) {
    return (
        <input className="form-control" onChange={(e) => updateAnswer(e.target.value)} />
    )
}