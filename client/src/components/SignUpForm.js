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


function SignUpForm({onLogin}) {
    
    const [signInErrorMessage, setSignInErrorMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const history = useHistory()

    const handleClickShowPassword = () => 
        setShowPassword((show) => !show)

    const handleMouseDownPassword = (e) => {
        e.preventDefault();
    }

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
        <Box sx={{ width: '100%' }}>
            <form onSubmit={formik.handleSubmit}>
                <Stack spacing={3}>
                    <FormGroup>
                        <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
                            <TextField
                                type="text"
                                label="Name"
                                variant="outlined"
                                {...formik.getFieldProps('name')}
                                error={formik.touched.name && Boolean(formik.errors.name)}
                                helperText={formik.touched.name && formik.errors.name}
                            />
                        </FormControl>
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
                    </FormGroup>
                </Stack>
                {signInErrorMessage && <p style={{ color: "red" }}>{signInErrorMessage}</p>}
                <Button type="submit" variant="contained">Sign Up</Button>
            </form>
        </Box>
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

// FORMIK INITIAL CODE

//   <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
//                             <InputLabel>Name</InputLabel>
//                             <OutlinedInput
//                                 type="text"
//                                 label="Name"
//                                 name="name"
//                                 value={formik.values.name}
//                                 onChange={formik.handleChange}
//                                 error={formik.touched.name && Boolean(formik.errors.name)}
//                                 helperText={formik.touched.name && formik.errors.name}
//                             />
//                         </FormControl> */}
//                         {/* <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
//                             <InputLabel>Username</InputLabel>
//                             <OutlinedInput
//                                 type="text"
//                                 label="Username"
//                                 name="username"
//                                 value={formik.values.username}
//                                 onChange={formik.handleChange}
//                             />
//                         </FormControl> */}
//                         {/* <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
//                             <InputLabel>Password</InputLabel>
//                             <OutlinedInput
//                                 type={showPassword ? 'text' : 'password'}
//                                 endAdornment={
//                                     <InputAdornment position="end">
//                                     <IconButton
//                                         aria-label="toggle password visibility"
//                                         onClick={handleClickShowPassword}
//                                         onMouseDown={handleMouseDownPassword}
//                                         edge="end"
//                                     >
//                                     {showPassword ? <VisibilityOff /> : <Visibility />}
//                                     </IconButton>
//                                     </InputAdornment>
//                                 }
//                                 label="Password"
//                                 name="password"
//                                 autoComplete="current-password"
//                                 value={formik.values.password}
//                                 onChange={formik.handleChange}
//                             />
//                         </FormControl> 

            // <div>
            //     <label htmlFor="name">Name</label>
            //     <input type="text" name="name" value={formik.values.name} onChange={formik.handleChange} />
            //     <p style={{ color: "red" }}> {formik.errors.name}</p>
            // </div>
            // <div>
            //     <label htmlFor="username">Username</label>
            //     <input type="text" name="username" value={formik.values.username} onChange={formik.handleChange} />
            //     <p style={{ color: "red" }}> {formik.errors.username}</p>
            // </div>
            // <div>
            //     <label htmlFor="password">Password</label>
            //     <input type="password" name="password" value={formik.values.password} onChange={formik.handleChange} />
            //     <p style={{ color: "red" }}> {formik.errors.password}</p>
            // </div>

export default SignUpForm;