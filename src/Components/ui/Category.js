import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startRegisterPost } from '../../Actions/postActions';
import { useForm } from '../../Hook/useForm';
import Post from '../ui/Post';

//////<<<<<------------------------------------------------``

const Category = () => 
{


////////////////////// REGISTER POST //////////////////////

    const { uid } = useSelector( state => state.auth );

    const { category } = useSelector( state => state.post );

    const dispatch = useDispatch();

    const date = new Date();

    const initFormValues = 
    {
        titlePost : "",
        bodyPost : "",
        likePost : 0,
        datePost : date.getDate() + "/" + ( date.getMonth() + 1 ) + "/" + date.getFullYear(),
        categoryPost : category,
        user : uid
    };

    const [ formValues, handleInputChange, reset ] = useForm( initFormValues );

    const { titlePost, bodyPost } = formValues;

    const handlePost = ( event ) =>
    {

        event.preventDefault();

        dispatch( startRegisterPost( formValues ) );

        reset();

    };

///////////////////////////////////////////////////


/*************************************************************************************************** */
    
    return (

        <div className="col-md-10">

            <div className="container mt-4">

                <div className="row">

                    <div className="col-md-12 cardBox">

                        <div className="card">

                            <div className="card-body" >

                                <form onSubmit={ handlePost }>

                                    <div className="form-group">
                                        <input className="form-control" type="text" name="titlePost" placeholder="Title" value={ titlePost } onChange={ handleInputChange }  />
                                    </div>

                                    <div className="form-group mt-2">
                                        <textarea className="form-control" name="bodyPost" placeholder="What are you thinking about?" value={ bodyPost } onChange={ handleInputChange }  ></textarea>
                                    </div>

                                    <div className="form-group mt-2">
                                        <button className="btn btnLogout form-control">Post</button>
                                    </div>

                                </form>

                            </div>

                        </div>

                    </div>

                </div>


                <hr/>

                
                <div className="row mt-2">

                    <Post/>

                </div>

            </div>

        </div>

    );

};

//////---------------------------------------------->>>>>

export default Category;
