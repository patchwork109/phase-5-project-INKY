import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

function Login({onLogin}) {
    const [showLogin, setShowLogin] = useState(true);
  
    const handleNoAccountSignUpClick = () => {
        setShowLogin(false);
    }

    const handleAlreadyHaveAccountClick = () => {
        setShowLogin(true);
    }

    return (
       <div>
            {showLogin ? (
                <>
                    <LoginForm onLogin={onLogin}/>
                    <p>Don't have an account?</p>
                    <button onClick={handleNoAccountSignUpClick}>Sign Up!</button>
                </>
            ) : (
                <>
                    <SignUpForm onLogin={onLogin}/>
                    <p>Already have an account?</p>
                    <button onClick={handleAlreadyHaveAccountClick}>Log In!</button>
                </>
            )
            }
       </div>
    );
}

export default Login;