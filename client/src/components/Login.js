import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import theme from "../themes/formtheme";

function Login({user, onLogin}) {
    const [showLogin, setShowLogin] = useState(true);
  
    const handleNoAccountSignUpClick = () => {
        setShowLogin(false);
    }

    const handleAlreadyHaveAccountClick = () => {
        setShowLogin(true);
    }

    return (
        <ThemeProvider theme={theme}>
       <div>
            {showLogin ? (
                <>
                    <LoginForm user={user} onLogin={onLogin}/>
                    <p style={{ color: '#aceca0', fontFamily: 'Bebas Neue', fontSize: 30, marginBottom: 10}}>New to INKY? Sign up.</p>
                    <Button variant="contained" onClick={handleNoAccountSignUpClick}>Sign Up</Button>
                </>
            ) : (
                <>
                    <SignUpForm onLogin={onLogin}/>
                    <p style={{ color: '#aceca0', fontFamily: 'Bebas Neue', fontSize: 30, marginBottom: 10 }}>Already an INKY member?</p>
                    <Button variant="contained" onClick={handleAlreadyHaveAccountClick}>Log In</Button>
                </>
            )
            }
       </div>
       </ThemeProvider>
    );
}

export default Login;