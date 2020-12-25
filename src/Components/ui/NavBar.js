import React from 'react';
import { useDispatch, /*useSelector*/ } from 'react-redux';
import { logoutAction } from '../../Actions/authActions';

//////<<<<<------------------------------------------------``

const NavBar = () => 
{

    //const { name } = useSelector( state => state.auth );

    const dispatch = useDispatch();

    const handleLogout = () =>
    {
        dispatch( logoutAction() );
    }

/******************************************************************************************************* */

    return (

        <nav className="navbar navbar-light bg-light justify-content-between">

            <span className="navbar-brand"><img alt="logo" className="logo" src="./IMG/logo.png" /></span>

            <span>

                <button onClick={ handleLogout } className="btn btnLogout my-2 my-sm-0"> Logout </button>

            </span>

        </nav>


    );
};

//////---------------------------------------------->>>>>

export default NavBar;
