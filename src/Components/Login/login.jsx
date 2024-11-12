import React,{ useRef, useState} from "react";
import login_btn from '../Assets/Login_button.png';
import './login.css';
import { Link,useNavigate } from "react-router-dom";


function Login(){
const userName = useRef();
const password = useRef();

const navigate = useNavigate();

const handleClick = ()=>{
    if(userName.current.value===localStorage.getItem('username') && password.current.value===localStorage.getItem('password')){
        navigate("/dashboard");
    }
    else{
        alert("Username or password is incorrect")
    }
}
    return(


        <div className='container'>
        <div className = 'header'>
            <h2>Hackathon </h2>
        </div>
        <div className='inputs'>
            <div className ='userName'>
                <input type='text' placeholder='Username' className='input' ref={userName}/>
            </div>
            <div className ='password'>
                <input type='password' placeholder='Password' className='input' ref={password} />
            </div>
        </div>
        
        
        <div className='login'>
            
            <button onClick={handleClick} ><img className="loginButton" src={login_btn}/></button>
                   
        </div>
        <div className='signUp'>New to the hackathon? <Link to="/signup"><span>Sign up</span></Link> </div>
        
    </div>

    )
}

export default Login