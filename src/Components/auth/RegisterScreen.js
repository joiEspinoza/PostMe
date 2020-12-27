import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { startRegisterAction } from '../../Actions/authActions';
import { useForm } from '../../Hook/useForm';

//////<<<<<------------------------------------------------``

const RegisterScreen = () => 
{

////////////////////// BTN BACK //////////////////////

    const history = useHistory();

    const handleBack = ( evento ) =>
    {
        evento.preventDefault();

        history.push( "/login" );
    }; 

///////////////////////////////////////////////////////



////////////////////// BTN REGISTER //////////////////////

const initiValues = 
{
    name : "Test",
    email : "test@gmail.com",
    password : "123456",
    password2 : "123456",
    postsLiked : []
};

const [ formValues, handleInputChange, reset ] =  useForm( initiValues ) ;

const { name, email, password, password2 } = formValues;

const dispatch = useDispatch();

const handleRegister = ( event ) =>
{
    event.preventDefault();

    if( formValues.password !== formValues.password2 )
    {
        return alert( "Passwords must not be the same" );
    };

    dispatch( startRegisterAction( formValues ) );

    reset();

};

/////////////////////////////////////////////////////////////

//*********************************************************************************************** */

    return (

        <div className="row">

            <div className="col-md-12">


                <div className="RegisterBox">

                    <form>

                        <div className="form-group mt-3">

                            <label>Name</label>
                            <input type="text" className="form-control" name="name" autoComplete="off" value={ name } onChange={ handleInputChange } />

                        </div>

                        <div className="form-group mt-3">

                            <label>Email</label>
                            <input type="email" className="form-control" name="email" autoComplete="off" value={ email } onChange={ handleInputChange } />

                        </div>

                        <div className="form-group mt-3">

                            <label>Password</label>
                            <input type="password" className="form-control" name="password" value={ password } onChange={ handleInputChange } />
                            
                        </div>

                        <div className="form-group mt-3">

                            <label>Confirm password</label>
                            <input type="password" className="form-control" name="password2" value={ password2 } onChange={ handleInputChange } />

                        </div>

                        <div className="form-group mt-4">

                            <button onClick={ handleRegister } className="btn btn-outline-primary form-control"> Register </button>
                            
                        </div>

                        <div className="form-group mt-4">

                            <button  onClick={ handleBack } className="btn btn-outline-primary form-control"><i className="fa fa-arrow-left" aria-hidden="true"></i></button>
                            
                        </div>

                    </form>
                    
                </div>

            </div>
            
        </div>

    );
};

//////---------------------------------------------->>>>>

export default RegisterScreen
