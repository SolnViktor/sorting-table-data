import React from "react";
import './Loader.css'


export function Loader() {


    return (
        <div className='loader'>
            <div className="lds-facebook">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>

    )
}