import React, { useState, useEffect } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import {Button} from 'react-bootstrap'
function UserInformation() {
    const [toggle, settoggle] = useState(true)
    const [data, setData] = useState([])

    useEffect(async () => {
        let NewData = JSON.parse(await localStorage.getItem("UserList"));
        setData(NewData)
        console.log(data.I);
    }, [])

    const onDelete = (Currentindex) => {
        let UserList = JSON.parse(localStorage.getItem("UserList"))
        UserList.filter((item, index) => {
            if (index == Currentindex) {
                UserList.splice(index, 1)
            }
        })
        localStorage.setItem("UserList", JSON.stringify(UserList))
        setData(UserList)
    }


    return (
        <>
            <div className="container">
                <h1 className="text-center">User Information</h1>
                <BootstrapTable data={data} bordered striped hover>
                    <TableHeaderColumn dataField='id' isKey={true}>Sr. No.</TableHeaderColumn>
                    <TableHeaderColumn dataField='name'>Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='email'>Email</TableHeaderColumn>
                    <TableHeaderColumn dataField='age'>Age</TableHeaderColumn>
                    <TableHeaderColumn dataField='dob'>Date of Birth</TableHeaderColumn>
                    <TableHeaderColumn dataField='gender'>Gender</TableHeaderColumn>
                    <TableHeaderColumn dataField='btn'><button onClick={onDelete}>Delete</button></TableHeaderColumn>
                </BootstrapTable>
            </div>
        </>
    )
}





export default UserInformation
