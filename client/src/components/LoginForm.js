import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useFormik } from "formik";
import * as Yup from 'yup';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Stack from '@mui/system/Stack';
import TextField from '@mui/material/TextField';

function LoginForm({onLogin}) {

    const [logInErrorMessage, setLogInErrorMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const history = useHistory()

    const handleClickShowPassword = () => 
        setShowPassword((show) => !show)

    const handleMouseDownPassword = (e) => {
        e.preventDefault();
    }

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
        <div>
        <h3>Nice to see you again!</h3>
        <p>Log into your INKY account to continue.</p>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
            <form onSubmit={formik.handleSubmit}>
                <Stack spacing={3}>
                    <FormGroup>
                        <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
                            <TextField
                                type="text"
                                label="Username"
                                variant="outlined"
                                {...formik.getFieldProps('username')}
                                error={formik.touched.username && Boolean(formik.errors.username)}
                                helperText={formik.touched.username && formik.errors.username}
                            />
                        </FormControl>
                        <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
                            <TextField
                                id="password"
                                label="Password"
                                variant="outlined"
                                type={showPassword ? 'text' : 'password'}
                                {...formik.getFieldProps('password')}
                                error={formik.touched.password && Boolean(formik.errors.password)}
                                helperText={formik.touched.password && formik.errors.password}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </FormControl>
                        <Button sx={{ m: 1, width: '42ch' }} type="submit" variant="contained">Log In</Button>
                    </FormGroup>
                </Stack>
                <br/>
                {logInErrorMessage && <p style={{ color: "red" }}>{logInErrorMessage}</p>}
            </form>
        </Box>
        </div>
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


// FORMIK JSX 
        // <form onSubmit={formik.handleSubmit}>
        //     <div>
        //         <label htmlFor="username">Username</label>
        //         <input type="text" name="username" value={formik.values.username} onChange={formik.handleChange} />
        //         <p style={{ color: "red" }}> {formik.errors.username}</p>
        //     </div>
        //     <div>
        //         <label htmlFor="password">Password</label>
        //         <input type="password" name="password" value={formik.values.password} onChange={formik.handleChange} />
        //         <p style={{ color: "red" }}> {formik.errors.password}</p>
        //     </div>
        //     {logInErrorMessage && <p style={{ color: "red" }}>{logInErrorMessage}</p>}
        //     <button type="submit">Log In</button>
        // </form>

export default LoginForm;