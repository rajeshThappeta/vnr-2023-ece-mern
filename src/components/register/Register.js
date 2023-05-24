import React from 'react'
import './Register.css'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function Register() {

  let navigate=useNavigate()
  let {register,handleSubmit,formState:{errors}}=useForm()

  function createUser(userObj){
    //HTTP POST to save userObj at API
    axios.post('http://localhost:4000/users',userObj)
    .then(res=>{
      if(res.status===201){
        //navigate to login component
        navigate('/login')
      }
    })
    .catch(err=>console.log("err in user registration ",err))
  }

  return (
    <div>
      <p className="display-2 text-center text-primary">Register</p>
      <form onSubmit={handleSubmit(createUser)}>
       <input type="text" {...register('username')} className="form-control mb-3" placeholder='Username' />
       <input type="password" {...register('password')} className="form-control mb-3" placeholder='Password' />
       <input type="date" {...register('dob')} className="form-control mb-3"  />
       <input type="email" {...register('email')} className="form-control mb-3"  placeholder='Email' />
       <button type="submit" className="btn btn-success">Regsiter</button>
      </form>


    </div>
  )
}

export default Register