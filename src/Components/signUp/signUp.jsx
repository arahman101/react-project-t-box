import React,{useState,useRef} from "react";
import  '../Login/login.css';
import './signUp.css';
import { Link,useNavigate } from "react-router-dom";
import register_btn from '../Assets/Register_button.png';
import container_btn from '../Assets/Container.png';

function Signup(){
    const [image,setImage] = useState(null);
    const userName = useRef();
    const email= useRef();
    const password = useRef();
    const confirmPassword = useRef();

    const navigate = useNavigate();





    const imageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
          setImage(URL.createObjectURL(file));
        } else {
          setImage(null);
        }
      };

   const handleClick=()=>{
        if(userName.current.value&&email.current.value&&password.current.value){
            if(password.current.value===confirmPassword.current.value){
            localStorage.setItem("username",userName.current.value)
            localStorage.setItem("email",email.current.value)
            localStorage.setItem("password",password.current.value)
            localStorage.setItem("Registerimage",image);
            localStorage.setItem("signUp",true);
            navigate("/");
            alert('account created successfully!');
            
            }
            else{
                alert('Passwords do not match')
            }
        }
    }
      
    return(
        <div>
            
        <div className='container'>
            
                <div className = 'Header'>
                    <div className = 'text'>Hackathon</div>
                </div>
                <div className='inputs'>
                    <div className ='userName'>
                        <input type='text' placeholder='Username' className='input' ref={userName} required/>
                    </div>
                    <div className ='email'>
                        <input type='email' placeholder='Email' className='input' ref={email} required/>
                    </div>
                <div className ='password'>
                        <input type='Password' placeholder='Password' className='input' ref={password} required />
                    </div>
                    <div className ='confirmPassword'>
                        <input type='Password' placeholder='Confirm Password' className='input' ref={confirmPassword} required />
                    </div>
                </div>

                <div className='addPicture'>
                <label htmlFor="inputPhoto" className="upload-label">
                    {image ? (
                        <img src={image} width={220} height={220} alt="Uploaded Preview" />
                    ) : (
                        <div className="uploadImg">
                            <p>Upload image</p>
                        <img src={container_btn} alt="Upload"/> 
                        </div>
                    )}
                    <input
                        type='file'
                        accept='image/*'
                        id='inputPhoto'
                        className='inputPhoto'
                        onChange={imageUpload}
                        hidden
                    />
                </label>
            </div>
                <div className='registerDiv'>
                    <button onClick={handleClick} ><img className="registerButton" src={register_btn}/></button>
                    </div>
  
                
    </div>

   </div> 
    )
}

export default Signup