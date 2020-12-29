import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAction } from '../../Actions/authActions';
import { cleanState } from '../../Actions/cleanAction';

//////<<<<<------------------------------------------------``

const NavBar = () => 
{

    const { name } = useSelector( state => state.auth );

////////////////////// LOGOUT //////////////////////

    const dispatch = useDispatch();

    const handleLogout = () =>
    {
        dispatch( cleanState() );
        dispatch( logoutAction() );
    };

//////////////////////////////////////////////////////

/******************************************************************************************************* */

    return (

        <nav className="navbar navbar-light bg-light">

            <span className="navbar-brand"><img alt="logo" className="logo" src="https://res.cloudinary.com/djlmqpd2n/image/upload/v1608948585/PostMe/logo_sbmxek.png" /></span>

            <span className="logoutBox">

                <div className="input-group">

                    <input type="text" disabled={ true } className="userNameInput form-control" defaultValue={ name }/>
                    <div className="input-group-append">
                        <button onClick={ handleLogout } className="btn btnLogout my-2 my-sm-0">Logout</button>
                    </div>

                </div>

            </span>

        </nav>

    );
};

//////---------------------------------------------->>>>>

export default NavBar;
