import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../../Actions/postActions';
import { Icon } from '@iconify/react';
import penguinIcon from '@iconify-icons/mdi/penguin';
import { CapitalLetter } from '../../Helpers/capitalLetter';



//////<<<<<------------------------------------------------``

const Categories = () => 
{

    const { categories,activeCategory } = useSelector( state => state.post );

    document.body.style.backgroundColor = activeCategory.color;


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
                
                        categories.map( ( category ) => {  


                            return  <div key={ category._id } className="col-md-3">
                                
                                        <div className="card cardCategory mb-3" >

                                            <div className="card-body bodyCategory">
                                                   
                                                <div className="row">

                                                    <div className="col-md-2 categoryColor">

                                                        <div className="contPin" style={ { backgroundColor : category.color } }>
                                                            <Icon onClick={ ()=>{ handleChangeCategory( category ) } } icon={penguinIcon} />
                                                        </div>
                                                        
                                                    </div>

                                                    <div className="col-md-10 categoryTitle">

                                                        { CapitalLetter( category.categoryTitle ) }
                                                        
                                                    </div>


                                                </div>
                                              
                                            </div>

                                        </div>

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
