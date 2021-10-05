import React from 'react'
import UserInformation from './UserInformation'

export default function Contact(props) {
    return(
        <>
            <UserInformation tableData={props.tableData}/>
        </>
    );
}