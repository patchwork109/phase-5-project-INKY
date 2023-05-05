import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useFormik } from "formik";
import * as Yup from 'yup';

function LoginForm({onLogin}) {

    const [logInErrorMessage, setLogInErrorMessage] = useState('');
    const history = useHistory()

    const formSchema = Yup.object().shape({
        username: Yup.string().required("Username required."),
        password: Yup.string().required("Password required.")
    })

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
            setLogInErrorMessage("Invalid username or password. Try again!")
        }
    }

    const formik = useFormik({
        initialValues: {
            username: "",
            password: ""
        },
        validationSchema:formSchema,
        onSubmit: (values) => {
            fetch("/login", {
                credentials: "include",
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(values)
            })
            .then(handleResponse)
        }
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" value={formik.values.username} onChange={formik.handleChange} />
                <p style={{ color: "red" }}> {formik.errors.username}</p>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" value={formik.values.password} onChange={formik.handleChange} />
                <p style={{ color: "red" }}> {formik.errors.password}</p>
            </div>
            {logInErrorMessage && <p style={{ color: "red" }}>{logInErrorMessage}</p>}
            <button type="submit">Log In</button>
        </form>
    );
}

//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const [logInErrorMessage, setLogInErrorMessage] = useState('');
//     const history = useHistory()

//     const handleResponse = (r) => {
//         if (r.ok) {
//             console.log("STATUS:", r.status)
//             r.json().then(user => {
//                 onLogin(user)
//                 console.log(user)
//                 history.push('/tattoos')
//             })
//         } else {
//             console.log("STATUS:", r.status)
//             setLogInErrorMessage("Invalid username or password. Try again!");
//         }
//     }

//     const handleLogInSubmit = (e) => {
//         e.preventDefault();
//         fetch("/login", {
//             method: "POST",
//             headers: {"Content-Type": "application/json",},
//             body: JSON.stringify({username, password}),
//         })
//         .then(r => handleResponse(r))
//     }
  
//     return (
//         <form onSubmit={handleLogInSubmit}>
//             <label>Username: </label>
//             <input
//                 type="text"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//             />
//             <label>Password: </label>
//             <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//             />
//             <button type="submit">Login</button>

//             {logInErrorMessage && (<div>{logInErrorMessage}</div>)}
//         </form>
//     );
// }

export default LoginForm;