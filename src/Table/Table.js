import React from "react";
import './Table.css'


export function Table (props) {

    return (
        <table className='table'>
            <thead>
            <tr>
                <th className={props.sortField === 'id' ? 'th active' : 'th'} onClick={() => props.onSort('id', props.data)}>ID
                    {props.sortField === 'id' && <span className={props.sort === 'desc'? `arrow` : `arrow arrow_active`}/>}
                </th>
                <th className={props.sortField === 'firstName' ? 'th active' : 'th'} onClick={() => props.onSort('firstName', props.data)}>First Name
                    {props.sortField === 'firstName' && <span className={props.sort === 'desc'? `arrow` : `arrow arrow_active`}/>}
                </th>
                <th className={props.sortField === 'lastName' ? 'th active' : 'th'} onClick={() => props.onSort('lastName', props.data)}>Last Name
                    {props.sortField === 'lastName' && <span className={props.sort === 'desc'? `arrow` : `arrow arrow_active`}/>}
                </th>
                <th className={props.sortField === 'email' ? 'th active' : 'th'} onClick={() => props.onSort('email', props.data)}>Email
                    {props.sortField === 'email' && <span className={props.sort === 'desc'? `arrow` : `arrow arrow_active`}/>}
                </th>
                <th className={props.sortField === 'phone' ? 'th active' : 'th'} onClick={() => props.onSort('phone', props.data)}>Phone
                    {props.sortField === 'phone' && <span className={props.sort === 'desc'? `arrow` : `arrow arrow_active`}/>}
                </th>
            </tr>
            </thead>
            <tbody>
            {props.data.map (item => (

                <tr key={item.id + item.phone} onClick={ () => props.showDataRow (item)}>
                    <td>{item.id}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}