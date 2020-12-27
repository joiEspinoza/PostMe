import React from 'react';
import { useDispatch, /*useSelector*/ } from 'react-redux';
import { logoutAction } from '../../Actions/authActions';

//////<<<<<------------------------------------------------``

const NavBar = () => 
{

    //const { name } = useSelector( state => state.auth );

////////////////////// LOGOUT //////////////////////

    const dispatch = useDispatch();

    const handleLogout = () =>
    {
        dispatch( logoutAction() );
    };

//////////////////////////////////////////////////////

/******************************************************************************************************* */

    return (

        <nav className="navbar navbar-light bg-light justify-content-between">

            <span className="navbar-brand"><img alt="logo" className="logo" src="https://res.cloudinary.com/djlmqpd2n/image/upload/v1608948585/PostMe/logo_sbmxek.png" /></span>

            <span>

                <button onClick={ handleLogout } className="btn btnLogout my-2 my-sm-0"> Logout </button>

            </span>

        </nav>

    );
};

//////---------------------------------------------->>>>>

export default NavBar;
