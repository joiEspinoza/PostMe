import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startRegisterPost } from '../../Actions/postActions';
import { useForm } from '../../Hook/useForm';
import Post from '../ui/Post';

//////<<<<<------------------------------------------------``

const HomeScreen = () => 
{

////////////////////// Registro Post //////////////////////

    const { uid } = useSelector( state => state.auth );

    const dispatch = useDispatch();

    const date = new Date();

    const initFormValues = 
    {
        titlePost : "",
        bodyPost : "",
        likePost : 0,
        datePost : date.getDate() + "/" + ( date.getMonth() + 1 ) + "/" + date.getFullYear(),
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


            <div className="row">

                <div className="col-md-2 sideBar">

                </div>

                <div className="col-md-10">

                    <div className="container mt-4">

                        <div className="row">

                            <div className="col-md-12 cardBox">

                                <div className="card">

                                    <div className="card-body" style={ { overflow : "hidden" } }>

                                        <form onSubmit={ handlePost }>

                                            <div className="form-group">
                                                <input className="form-control" type="text" name="titlePost" placeholder="Title" value={ titlePost } onChange={ handleInputChange }  />
                                            </div>

                                            <div className="form-group mt-3">
                                                <textarea className="form-control" name="bodyPost" placeholder="What are you thinking about?" value={ bodyPost } onChange={ handleInputChange }  ></textarea>
                                            </div>

                                            <div className="form-group mt-3">
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

            </div>

    );
};

//////---------------------------------------------->>>>>

export default HomeScreen;