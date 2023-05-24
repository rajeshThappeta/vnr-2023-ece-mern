import React from 'react'
import './Login.css'
import {useForm} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

function Login() {

  let navigate=useNavigate()
  let {register,handleSubmit,formState:{errors}}=useForm()

  function loginUser(userCredentialsObj){
    
      axios.get(`http://localhost:4000/users?username=${userCredentialsObj.username}`)
      .then(res=>{
       
        //if username is sinvalid
        if(res.data.length===0){
          alert("Invalid username")
        }else{
          let userFromDb=res.data[0]
          //compare passwords
          if(userFromDb.password===userCredentialsObj.password){
            //navigate to user-profile
            navigate('/user-profile')
          }
          else{
            alert("Invalid password")
          }
        }
      })
      .catch(err=>console.log("err in login ",err))

  }



  return (
    <div>
    <p className="display-2 text-center text-primary">Login</p>
    <form onSubmit={handleSubmit(loginUser)}>
       <input type="text" {...register('username')} className="form-control mb-3" placeholder='Username' />
       <input type="password" {...register('password')} className="form-control mb-3" placeholder='Password' />
      
       <button type="submit" className="btn btn-success">Login</button>
      </form>
  </div>
  )
}

export default Login