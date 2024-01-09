// import { Container, TextField, Button } from '@mui/material'
// import React, { useState } from 'react'

// const ValidationForm = () => {
//     const [user, setUser] = useState({
//         email: '', password: ""
//     });

//     const [errors, setErrors] = useState({
//         email: false, password: false
//     })

//     const [data, setData] = useState([])
//     const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%^&*])[A-Za-z\d@#$!%^&*]{6,}$/;

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setUser({ ...user, [name]: value.trim() }); // Using trim to remove whitespaces
//         if (name === "username") {
//           setError((error) => ({ ...error, username: value.trim().length < 4 }));
//         }
//         if (name === "email") {
//           setError((error) => ({ ...error, email: !regex.test(value.trim()) }));
//         }
//         if (name === "phoneNumber") {
//           setError((error) => ({ ...error, phoneNumber: value.trim().length < 10 }));
//         }
//         if (name === "message") {
//           setError((error) => ({ ...error, message: value.trim().length < 3 }));
//         }
//       };
      
//       const handleSubmit = (e) => {
//         e.preventDefault();
//         const trimmedUser = {
//           username: user.username.trim(),
//           email: user.email.trim(),
//           phoneNumber: user.phoneNumber.trim(),
//           message: user.message.trim(),
//         };
      
//         if (
//           !trimmedUser.username &&
//           !trimmedUser.email &&
//           !trimmedUser.phoneNumber &&
//           !trimmedUser.message
//         ) {
//           alert("Please enter a username and email address for this user");
//         } else {
//           alert("Success");
//           setTableData([...tableData, trimmedUser]);
//           setUser({
//             username: "",
//             email: "",
//             phoneNumber: "",
//             message: "",
//           });
//         }
//         console.log(tableData);
//       };
      
//     return (
//         <Container>
//             <div className="validation-form">
//                 <h1 >Validation Form</h1><br />
//                 <p >Please fill in the form below to validate your account.</p></div>
//             <form onSubmit={handleSubmit}>
//                 <TextField
//                     label='Email Address'
//                     margin="dense"
//                     fullWidth
//                     name="email"
//                     type="email"
//                     value={user.email}
//                     onChange={handleChange}
//                 />
//                 {
//                     errors.email && <span> <small style={{ color: "red" }}> Invalid Email address!</small> </span>}

//                 <TextField
//                     label='Password'
//                     margin="dense"
//                     fullWidth
//                     name="password"
//                     type="password"
//                     value={user.password}
//                     onChange={handleChange}
//                 /> {errors.password && (
//                     <span style={{ color: 'red' }}>
//                         * Password must meet the criteria (at least 6 characters, including uppercase, lowercase, digit, and special character).
//                     </span>
//                 )}
//                 <Button type="submit" variant="contained" sx={{ mt: "5px" }}>Submit</Button>
//             </form>

//             {
//                 data.map((item, index) => {
//                     return (
                        
//                            <ol  key={index}>
//                                 <li>{item.email}</li>
//                                 <li>{item.password}</li>
//                             </ol>
                        
//                     )
//                 })
//             }
//         </Container>
//     )
// }

// export default ValidationForm