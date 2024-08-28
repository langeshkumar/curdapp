import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Home() {

    const [tabledata, setTabledata] = useState([])

    useEffect(() => {
        fetch('http://localhost:8081/')
            .then(res => res.json())
            .then(data => setTabledata(data))
            .catch(err => console.log(err))
    })

    let i = 1;

    return (
        <div className='container mt-5'>
            <div className='card text-center shadow-lg'>
                <div className='card-header'>
                    <div className='row'>
                        <div className='col-sm-9'>
                            <h6 className='text-uppercase fw-bold'>curp app table</h6>
                        </div>
                        <div className='col-sm-3'>
                            <Link to={`/create`} className='btn btn-success btn-sm'>Create +</Link>
                        </div>
                    </div>
                </div>
                <div className='card-body'>
                    <table className='table table-bordered table-striped'>
                        <thead>
                            <tr>
                                <th>Sno</th>
                                <th>Name</th>
                                <th>Position</th>
                                <th>Salary</th>
                                <th>Branch</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tabledata.map((val, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{i++}</td>
                                        <td>{val.emp_name}</td>
                                        <td>{val.emp_desc}</td>
                                        <td>{val.salary}</td>
                                        <td>{val.branch_id}</td>
                                        <td>
                                            <Link to={`/view/${val.emp_id}`} className='btn btn-secondary btn-sm me-2'>View</Link>
                                            <Link to={`/edit/${val.emp_id}`} className='btn btn-warning btn-sm me-2'>Edit</Link>
                                            <button className='btn btn-danger btn-sm'>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Home
