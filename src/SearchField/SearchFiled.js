import React, {useState} from "react";

export function SearchField (props) {

    const [inputValue, setInputValue] = useState('')

    function onChangeHandler (e) {
        setInputValue(e.currentTarget.value)
    }

    return (
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <button onClick={() => props.onFilterHandler(inputValue)} className="btn btn-outline-secondary" type="button" id="button-addon1">Search</button>
            </div>
            <input onChange={onChangeHandler} type="text" className="form-control" placeholder="" aria-label="Example text with button addon"
                   aria-describedby="button-addon1"/>
        </div>
    )

}