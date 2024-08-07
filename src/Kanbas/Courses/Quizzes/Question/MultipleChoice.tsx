
export default function MultipleChoice(options: any) {
    // [{
    //     type: String,
    //     required: true,
    // }]
    const optionsArray = options.options;

    return (

        <div className="form-check">{optionsArray.map((o: any, idx: any) => 
            <div>
            <input className="form-check-input" type="radio" id={`${idx}`} />
            <label htmlFor={`${idx}`}>{`${o}`}</label>
            </div>
            )}
        </div>


    )
}