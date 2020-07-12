import React from "react";

export const Paginator = (props) => {
    


    return (
        <div>
            {props.pages.length > 0 && props.pages.map(p => <button key={p} onClick={() => props.onPageChangeHandler(p - 1)}>{p}</button>)}

        </div>

    )
}