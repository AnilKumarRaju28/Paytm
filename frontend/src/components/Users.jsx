import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import axios from 'axios';
import { Button } from '../components/Button';


const Users = () => {

    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/user/bulk?filter=" + filter)
            .then(response => {
                setUsers(response.data.user)
            })
    }, [filter])


    return <>
        <div className='font-bold mt-6 text-lg'>
            Users
        </div>
        <div className='my-2'>
            <input onChange={(e) => {
                setFilter(e.target.value)
            }} type='text' placeholder='Search Users' className='w-full px-2 py-1 border rounded border-slate-200'></input>
        </div>
        <div>
            {users.map(user => <User user={user} />)}
        </div>
    </>
}

function User({ user }) {
    const navigate = useNavigate();

    return <div className='flex justify-between mb-2'>
        <div className='flex items-center'>
            <div className='rounded-lg bg-cyan-300 h-12 w-12'>
                <div className='flex justify-center m-2'>
                    {user.firstName[0]}
                </div>
            </div>
            <div className='ml-2'>
                {user.firstName} {user.lastName}

            </div>

        </div>

        <div className='ml-20 justify-end w-25'>
            <div className='w-'>
                <Button onClick={(e) => {
                    navigate("/send?id=" + user._id + "&name=" + user.firstName)
                }} label={"Send Money"} />

            </div>

        </div>
    </div>

}

export default Users