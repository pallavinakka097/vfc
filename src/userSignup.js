import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import validation from './usersignupvalidation'
import axios from 'axios'
function Signup() {
    const [values,setValues]=useState({
        // id:'',
        name:'',
        email:'',
        password:'',
    });
    const [errors,setErrors]=useState({});
    const [signupMessage, setSignupMessage] = useState("");
    const handleInput=(event)=>{
        setValues({...values,[event.target.name]:event.target.value});
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = validation(values);
        setErrors(validationErrors);
      
        if (Object.values(validationErrors).every(val => val === "")) {
          axios.post('http://localhost:9090/signup',values)
            .then((res)=>{
              console.log(res);
              setSignupMessage(res.data);
            })
            .catch((err)=>console.log(err))
        }
      }
      
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
    <div className='bg-white p-3 rounded w-25'>
        <form action="" onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label htmlFor='name'><strong>Name</strong></label>
                <input type='name' placeholder='Enter your Full Name' name='name' onChange={handleInput} className='form-control rounded-0'/>
                {errors.name && <span className='text-danger'>{errors.name} </span>}
            </div>
            <div className='mb-3'>
                <label htmlFor='email'><strong>Email</strong></label>
                <input type='email' placeholder='Enter Email' name='email' onChange={handleInput} className='form-control rounded-0'/>
                {errors.email && <span className='text-danger'>{errors.email} </span>}
            </div>
            <div className='mb-3'>
                <label htmlFor='password'><strong>Password</strong></label>
                <input type='password' placeholder='Enter new password' name='password' onChange={handleInput} className='form-control rounded-0'/>
                {errors.password && <span className='text-danger'>{errors.password} </span>}
            </div>
            <button type = 'submit' className='btn btn-success w-100 rounded-0 text-decoration-none'>SIGN UP</button>
            <p>You are agreed to our terms and conditions.</p>
            <Link to='/login' className='btn btnn-default border w-100 bg-light rounded-0text-decoration-none'>LOGIN</Link>
        </form>
        {signupMessage && (
          <div className='text-danger'>{signupMessage}</div>
        )}
    </div>
    </div>
  )
}

export default Signup;
// import React, { useState } from 'react';
// import Loader from "../components/Loader";
// import Error from "../components/Error";
// import axios from 'axios';
// import Success from '../components/Success';
// function Registerscreen() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setloading] = useState(false);
//   const [error, seterror] = useState();
//   const [success,setsuccess] = useState()
//   async function register() {
//     const user = {
//       name,
//       email,
//       password
//     };

//     try {
//       setloading(true);
//       const result = await axios.post('http://localhost:5000/api/user/register', user);
//       console.log(result)
//       setloading(false);
//       setsuccess(true);
//       setName('')
//       setEmail('')
//       setPassword('')
//     } catch (error) {
//       setloading(false);
//       seterror(true);
//       console.log(error);
//     }
//   }
//   return (
//     <div>
//       {loading && (<Loader/>)}
//       {error && (<Error message='Invalid credentials'/>)}
//       <div className='row justify-content-center mt-5'>
//         <div className='col-md-5 mt-5'>
//         {success && (<Success message='Registration success'/>)}
//           <div className='bs'>
//             <h2>Register</h2>
//             <input
//               type='text'
//               className='form-control'
//               placeholder='name'
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//             <input
//               type='text'
//               className='form-control'
//               placeholder='email'
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <input
//               type='text'
//               className='form-control'
//               placeholder='password'
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <button className='btn btn-primary mt-3' onClick={register}>
//               Register
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Registerscreen;