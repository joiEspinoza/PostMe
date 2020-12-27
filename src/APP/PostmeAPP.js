import React from 'react';
import { Provider } from 'react-redux';
import RouterAPP from '../Router/RouterAPP';
import { store } from '../Store/store';
import "../Style/PostmeAPP.css";

//////<<<<<------------------------------------------------``

const PostmeAPP = () => 
{

    return (

        //--------------------API---------------------//
    ////////////////////// LOAD ROUTER //////////////////////

         <Provider store={ store }><RouterAPP/></Provider>

    /////////////////////////////////////////////////////////


    );

};

//////---------------------------------------------->>>>>

export default PostmeAPP;
