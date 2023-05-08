import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import Button from '@mui/material/Button';

function Login({user, onLogin}) {
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
                    <LoginForm user={user} onLogin={onLogin}/>
                    <p>New to INKY? Sign up.</p>
                    <Button variant="contained" onClick={handleNoAccountSignUpClick}>Sign Up!</Button>
                </>
            ) : (
                <>
                    <SignUpForm onLogin={onLogin}/>
                    <p>Already an INKY member?</p>
                    <Button variant="contained" onClick={handleAlreadyHaveAccountClick}>Log In!</Button>
                </>
            )
            }
       </div>
    );
}

export default Login;