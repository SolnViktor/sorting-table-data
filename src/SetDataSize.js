import React from "react";


export const SetDataSize = (props) => {




    return (
        <div>
            <button onClick={() => props.changeSize(32)}>
                Load small size
            </button>
            <button onClick={() => props.changeSize(1000)}>
                Load big size
            </button>
        </div>

    )
}