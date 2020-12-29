import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../../Actions/postActions';


//////<<<<<------------------------------------------------``

const Categories = () => 
{

    const { categories } = useSelector( state => state.post );


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

                    {
                
                        categories.map( ( categoryArray ) => {  


                            return  <div key={ categoryArray._id } className="col-md-3">
                                
                                        <button className="btn btn-primary form-control mt-4" onClick={ ()=>{ handleChangeCategory( categoryArray.category ) } } >{ categoryArray.category }</button>

                                    </div>
                        } )
                    }
                        
                </div>

               

            </div>
            
        </div>
    );

};

//////---------------------------------------------->>>>>

export default Categories;
