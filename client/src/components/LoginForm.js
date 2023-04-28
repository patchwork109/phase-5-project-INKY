import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function LoginForm({user, onLogin}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory()
  
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://127.0.0.1:5555/login", {
            method: "POST",
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify({username, password}),
        })
        .then((r) => r.json())
        .then((user) => onLogin(user));

        console.log(user)
        history.push('/')
    }
  
    return (
        <form onSubmit={handleSubmit}>
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
        </form>
    );
}

export default LoginForm;