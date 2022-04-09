import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
//import {signIn} from './Controllers/Redux/authSlice.js'
import {signIn} from 'C:/my_storage_in_c/2nd_year_ESE_notes_sem_1/Bug-Tracker/frontend_1/src/Controllers/Redux/authSlice.js'



import './login.css'

const Login= ()=>{
    const dispatch = useDispatch();

    const [formInput,setFormInput]=useState({
        name:"",
        password:""
    })

    function inputChanged(e){
        setFormInput({
            ...formInput,
            [e.target.name]:e.target.value
        })
    }

    function submit(e){
        dispatch(signIn(formInput));
        e.preventDefault();
    }

    return(
        <div className="loginBG">
            <form className='login-panel'>
                <h1>Login:</h1>
                <input name='name' placeholder='Name' onChange={inputChanged} value={formInput.name}></input>
                <input name='password' type='password' placeholder='Password' onChange={inputChanged} value={formInput.password}></input>
                <button type='submit' onClick={submit}>Login</button>
            </form>
        </div>    
    )
}
export default Login