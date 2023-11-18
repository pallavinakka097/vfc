import validation from './ownerloginvalid';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useProductContext from './context/hooks'
import axios from 'axios';
import './login.css'
function Login() {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const { setSelectedItem } = useProductContext();
  const [errors, setErrors] = useState({});
  const [loginMessage, setLoginMessage] = useState("");
  const handleInput = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target[0].value)
    setValues({name:event.target[0].value,email : event.target[1].value,password : event.target[2].value})
    event.preventDefault();
    const storeName = event.target[0].value;
    const validationErrors = validation(values);
    setErrors(validationErrors);
    axios.post('http://localhost:9090/ownerlogin', values)
    .then((res) => {
      console.log(res);
      if (res.data === "LOGIN SUCCESSFUL") {
        setLoginMessage("LOGIN SUCCESSFUL");
        setSelectedItem(storeName);
        navigate('/ownerstoreitems');
      } else {
        setLoginMessage("Invalid email or password");
      }
    })
    .catch((err) => console.error(err));
};
  return (
    <div className='container'> 
    <div className='login-container'>
        <form onSubmit={handleSubmit}>
        <div className='form-group'> 
            <label htmlFor='name'><strong>Store Name</strong></label>
            <input type='name' placeholder='Enter Store name' name='storename' onChange={handleInput} className='form-control' />
            {errors.storename && <span className='text-danger'>{errors.storename} </span>}
          </div>
          <div className='form-group'> 
            <label htmlFor='email'><strong>Email</strong></label>
            <input type='email' placeholder='Enter Email' name='email' onChange={handleInput} className='form-control' />
            {errors.email && <span className='text-danger'>{errors.email} </span>}
          </div>
          <div className='form-group'> 
            <label htmlFor='password'><strong>Password</strong></label>
            <input type='password' placeholder='Enter password' name='password' onChange={handleInput} className='form-control' />
            {errors.password && <span className='text-danger'>{errors.password} </span>}
          </div>
          <button type='submit' className='btns'>LOGIN</button>
          <p>Don't have an account?</p>
          <Link to='/ownersignup' className='btn btn-default border w-100 bg-light'>CREATE ACCOUNT</Link>
        </form>
        {loginMessage && (
          <div className='text-danger'>{loginMessage}</div>
        )}
      </div>
      </div>
  );
}

export default Login;
