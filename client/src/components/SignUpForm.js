import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function SignUpForm({user, onLogin}) {

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [errorMessage, setErrorMessage] = useState('');
    const history = useHistory()

    const handleResponse = (r) => {
        if (r.ok) {
            console.log("STATUS:", r.status)
            r.json().then(user => {
                onLogin(user)
                console.log(user)
                history.push('/tattoos')
            })
        } else {
            console.log("STATUS:", r.status)
            setErrorMessage("Invalid username or password. Try again!");
        }
    }

    const handleSignUpSubmit = (e) => {
        e.preventDefault();
        fetch("/signup", {
            method: "POST",
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify({
                name: name,
                username: username,
                password: password,
                password_confirmation: passwordConfirmation,
            }),
        })
        .then(r => handleResponse(r))
    }

    return (
       <div>
            <form onSubmit={handleSignUpSubmit}>
                <label htmlFor="name">Name: </label>
                <input
                    type="text"
                    id="name"
                    autoComplete="off"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="username">Username: </label>
                <input
                    type="text"
                    id="username"
                    autoComplete="off"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="password">Password: </label>
                <input
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="password">Password Confirmation: </label>
                <input
                    type="password"
                    id="password_confirmation"
                    autoComplete="current-password"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
                <button type="submit">Sign Up!</button>
                
                {errorMessage && (<div>{errorMessage}</div>)}
            </form>
       </div>
    );
}

export default SignUpForm;