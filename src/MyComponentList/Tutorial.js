import React from 'react'

export default function About() {
    return(
        <>
          <p>About</p>  
        </>
    );
}
{/* {
                    toggle ?
                        <div className="table-responsive ">
                            <table className="table table-striped table-hover table-bordered">
                                <thead className="table-danger">
                                    <tr>
                                        <th scope="col">sr.no</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email Id</th>
                                        <th scope="col">Age</th>
                                        <th scope="col">DOB</th>
                                        <th scope="col">Gender</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.map((item, index) => (
                                            <tr>
                                                <th scope="row">{index + 1}</th>
                                                <td>{item.name}</td>
                                                <td>{item.email}</td>
                                                <td>{item.age}</td>
                                                <td>{item.dob}</td>
                                                <td>{item.gender}</td>
                                                <td><button className="btn btn-sm " type="button" onClick={() => onDelete(index)}>Delete</button></td>
                                                <td><button className="btn btn-sm " type="button" onClick={(item, index) => AddDetails(item, index)}>Add</button></td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div> : null
                } */}