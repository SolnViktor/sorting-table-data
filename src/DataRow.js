import React from "react";

export const DataRow = (props) => {
    let {dataRow} = props
    return (
        <div>
            <div>
                Name: <b>{`${dataRow.lastName} ${dataRow.firstName}`}</b>
            </div>
            <div>
                Address: <b>{`${dataRow.address.state}, ${dataRow.address.city}, ${dataRow.address.streetAddress}`}</b>
            </div>
            <div>
                Email: <b>{`${dataRow.email}`}</b>
            </div>
            <div>
                Phone: <b>{`${dataRow.phone}`}</b>
            </div>
            <div>
                Description: <b>{`${dataRow.description}`}</b>
            </div>
        </div>
    )
}