import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import validation from './ownersignupvalid'
import axios from 'axios'
function Signup() {
    const [values,setValues]=useState({
        name:'',
        storename:'',
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
          axios.post('http://localhost:9090/ownersignup',values)
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
                <label htmlFor='name'><strong>STORE NAME</strong></label>
                <input type='name' placeholder='Enter your Store Name' name='storename' onChange={handleInput} className='form-control rounded-0'/>
                {errors.storename && <span className='text-danger'>{errors.storename} </span>}
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
            <Link to='/ownerlogin' className='btn btnn-default border w-100 bg-light rounded-0text-decoration-none'>LOGIN</Link>
        </form>
        {signupMessage && (
          <div className='text-danger'>{signupMessage}</div>
        )}
    </div>
    </div>
  )
}

export default Signup;