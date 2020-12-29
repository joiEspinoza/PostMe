import React from 'react';
import { useDispatch } from 'react-redux';
import { setCategory } from '../../Actions/postActions';

//////<<<<<------------------------------------------------``

const Categories = () => 
{


////////////////////// BTN CATEGORY //////////////////////

    const dispatch = useDispatch();

    const handleChangeCategory = ( category ) =>
    {
        dispatch( setCategory( category ) );
    };


//////////////////////////////////////////////////////////


/************************************************************************************************************* */

    return (

        <div className="col-md-10">

            <div className="container mt-4">

                <div className="row">

                    <div className="col-md-3">
                        
                        <button onClick={ ()=>{ handleChangeCategory( "informatica" ) } }>informatica</button>
                        
                    </div>

                </div>

            </div>
            
        </div>
    );

};

//////---------------------------------------------->>>>>

export default Categories;
