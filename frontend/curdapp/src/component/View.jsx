import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function View() {

    const [name, setName] = useState('')
    const [position, setPosition] = useState('')
    const [salary, setSalary] = useState('')
    const [branch, setBranch] = useState('')

    const { id } = useParams()

    useEffect(() => {
        axios.get('http://localhost:8081/view/' + id)
            .then((res) => {
                setName(res.data[0].emp_name)
                setPosition(res.data[0].emp_desc)
                setSalary(res.data[0].salary)
                setBranch(res.data[0].branch_id)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className='container'>
            <div className='card background-white shadow-lg p-5 mt-5'>
                <span className='text-center text-uppercase fw-bold'>view details</span>
                <form className='mt-3'>
                    <div className='form-label'>Name : </div>
                    <input className='form-control' name='name' placeholder='Enter name' value={name} readOnly />
                    <div className='form-label mt-3'>Position : </div>
                    <input className='form-control' name='position' placeholder='Enter position' value={position} readOnly />
                    <div className='form-label mt-3'>Salary : </div>
                    <input className='form-control' name='salary' placeholder='Enter salary' value={salary} readOnly />
                    <div className='form-label mt-3'>Branch id : </div>
                    <input className='form-control' name='branch' placeholder='Enter branch id' value={branch} readOnly />
                    <Link to={'/'} className='btn btn-sm btn-secondary mt-3 me-2'>Back Button</Link>
                </form>
            </div>
        </div>
    )
}

export default View
