import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function LoginForm({onLogin}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [logInErrorMessage, setLogInErrorMessage] = useState('');
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
            setLogInErrorMessage("Invalid username or password. Try again!");
        }
    }

    const handleLogInSubmit = (e) => {
        e.preventDefault();
        fetch("/login", {
            method: "POST",
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify({username, password}),
        })
        .then(r => handleResponse(r))
    }
  
    return (
        <form onSubmit={handleLogInSubmit}>
            <label>Username: </label>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <label>Password: </label>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>

            {logInErrorMessage && (<div>{logInErrorMessage}</div>)}
        </form>
    );
}

export default LoginForm;