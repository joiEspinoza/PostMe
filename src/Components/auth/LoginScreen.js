import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLoginAction } from '../../Actions/authActions';
import { useForm } from '../../Hook/useForm';

//////<<<<<------------------------------------------------``

const LoginScreen = () => 
{


////////////////////// BTN LOGIN //////////////////////

const initFormValue = 
{
    email : "test@gmail.com",
    password : "123456"
};

const [ formValues, handleInputChange ] = useForm( initFormValue );

const { email, password } = formValues;

const dispatch = useDispatch(); 

const handleLogin = ( event ) =>
{
    event.preventDefault();

    dispatch( startLoginAction( formValues ) );
};

//////////////////////////////////////////////////////

/******************************************************************************************************* */

    return (


        <div className="row">

            <div className="col-md-12">


                <div className="LoginBox">

                    <form onSubmit={ handleLogin }>

                        <div className="form-group mt-3">

                            <label>Email</label>
                            <input type="email" className="form-control" name="email" autoComplete="off" value={ email } onChange={ handleInputChange } />

                        </div>

                        <div className="form-group mt-3">

                            <label>Password</label>
                            <input type="password" className="form-control" name="password" value={ password } onChange={ handleInputChange } />
                            
                        </div>

                        <div className="form-group mt-4">

                            <button className="btn btn-outline-primary form-control"> Login </button>

                        </div>

                        <div className="textRegisterBox">

                            <Link to="/register" className="registerLink">Register</Link>

                        </div>

                    </form>
                    
                </div>

            </div>
            
        </div>

    );
};

//////---------------------------------------------->>>>>

export default LoginScreen;
