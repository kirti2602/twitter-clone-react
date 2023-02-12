import React, { useState } from "react";
import {useNavigate} from "react-router-dom";


const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [msg, setMsg] = useState();
    const navigate = useNavigate()

    // regex for email and password
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    
    const handleClick = (e) =>{
        e.preventDefault(); // to prevent refresh after submit is clicked
        if(!(email && password)){
            setMsg("Please fill both the fields!");
        }
        else if(!emailRegex.test(email)){
            setMsg("Please provide valid email!")
        }
        else if(!passwordRegex.test(password)){
            setMsg("Password must contain at least 8 characters,one uppercase letter, one number and one special character")
        }
        else{
            setMsg("");
            navigate("/homepage")
        }
    }

  return (
    <main className="login flex height100vh">
      <form className="login__form flex flex-col gap2rem">
        <h1 className="login__form__heading">Sign in to Twitter</h1>
        <input
        onChange={(e) => setEmail(e.target.value)}
          className="login__form__email input-box"
          type="email"
          required
          placeholder="enter your email"
        />
        <input
        onChange={(e) => setPassword(e.target.value)}
          className="login__form__password input-box"
          type="password"
          required
          placeholder="enter your password"
        />

        <button onClick={(e) => handleClick(e)} className="btn login__form__btn">
          Login
        </button>
        <span className="login__form__message">{msg}</span>
      </form>
    </main>
  );
};

export default Login;
