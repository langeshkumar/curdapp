import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

function Create() {

    const [name, setName] = useState('')
    const [position, setPosition] = useState('')
    const [salary, setSalary] = useState('')
    const [branch, setBranch] = useState('')

    const navigate = useNavigate();

    const handleSubmit = () => {
        axios.post('http://localhost:8081/create/', { name, position, salary, branch })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <div className='container'>
            <div className='card background-white shadow-lg p-5 mt-5'>
                <span className='text-center text-uppercase fw-bold'>create details</span>
                <form className='mt-3' onSubmit={handleSubmit}>
                    <div className='form-label'>Name : </div>
                    <input className='form-control' name='name' placeholder='Enter name' onChange={e => setName(e.target.value)} />
                    <div className='form-label mt-3'>Position : </div>
                    <input className='form-control' name='position' placeholder='Enter position' onChange={e => setPosition(e.target.value)} />
                    <div className='form-label mt-3'>Salary : </div>
                    <input className='form-control' name='salary' placeholder='Enter salary' onChange={e => setSalary(e.target.value)} />
                    <div className='form-label mt-3'>Branch id : </div>
                    <input className='form-control' name='branch' placeholder='Enter branch id' onChange={e => setBranch(e.target.value)} />
                    <Link to={'/'} className='btn btn-sm btn-secondary mt-3 me-2'>Back Button</Link>
                    <button className='btn btn-sm btn-primary mt-3'>Save Button</button>
                </form>
            </div>
        </div>
    )
}

export default Create
