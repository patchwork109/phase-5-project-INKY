import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function SignUpForm({onLogin}) {

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const history = useHistory()

    const handleSignUpSubmit = (e) => {
        e.preventDefault();
        fetch("http://127.0.0.1:5555/signup", {
            method: "POST",
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify({
                name: name,
                username: username,
                password: password,
                password_confirmation: passwordConfirmation,
            }),
          })
        .then((r) => r.json())
        .then((user) => onLogin(user));

        history.push('/')
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
            </form>
       </div>
    );
}

export default SignUpForm;