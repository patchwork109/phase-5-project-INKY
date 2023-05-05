import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useFormik } from "formik";
import * as Yup from 'yup';

function SignUpForm({onLogin}) {
    
    const [signInErrorMessage, setSignInErrorMessage] = useState('');
    const history = useHistory()

    const formSchema = Yup.object().shape({
        name: Yup.string().required('Name is required.'),
        username: Yup.string().required('Username is required.'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
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
            setSignInErrorMessage("Unable to sign up. Please try again!")
        }
    }

    const formik = useFormik({
        initialValues: {
            name: "",
            username: "",
            password: ""
        },
        validationSchema:formSchema,
        onSubmit: (values) => {
            fetch("/signup", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                credentials: "include",
                body: JSON.stringify(values)
            })
            .then(handleResponse)
        }
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" value={formik.values.name} onChange={formik.handleChange} />
                <p style={{ color: "red" }}> {formik.errors.name}</p>
            </div>
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
            {signInErrorMessage && <p style={{ color: "red" }}>{signInErrorMessage}</p>}
            <button type="submit">Sign Up</button>
        </form>
    );
}

//     const [name, setName] = useState("");
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const [passwordConfirmation, setPasswordConfirmation] = useState("");
//     const [errorMessage, setErrorMessage] = useState('');
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
//             r.json().then(data => {
//                 console.log(data.error)
//                 setErrorMessage(data.error)
//             })
//         }
//     }

//     const handleSignUpSubmit = (e) => {
//         e.preventDefault();
//         fetch("/signup", {
//             method: "POST",
//             headers: {"Content-Type": "application/json",},
//             body: JSON.stringify({
//                 name: name,
//                 username: username,
//                 password: password,
//                 password_confirmation: passwordConfirmation,
//             })
//         })
//         .then(r => handleResponse(r))
//     }

//     return (
//        <div>
//             <form onSubmit={handleSignUpSubmit}>
//                 <label htmlFor="name">Name: </label>
//                 <input
//                     type="text"
//                     id="name"
//                     autoComplete="off"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                 />
//                 <label htmlFor="username">Username: </label>
//                 <input
//                     type="text"
//                     id="username"
//                     autoComplete="off"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                 />
//                 <label htmlFor="password">Password: </label>
//                 <input
//                     type="password"
//                     id="password"
//                     autoComplete="current-password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <label htmlFor="password">Password Confirmation: </label>
//                 <input
//                     type="password"
//                     id="password_confirmation"
//                     autoComplete="current-password"
//                     value={passwordConfirmation}
//                     onChange={(e) => setPasswordConfirmation(e.target.value)}
//                 />
//                 <button type="submit">Sign Up!</button>
                
//                 {errorMessage && (<div>{errorMessage}</div>)}
//             </form>
//        </div>
//     );
// }

export default SignUpForm;