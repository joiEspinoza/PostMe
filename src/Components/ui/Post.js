import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { starRegisterLike } from '../../Actions/authActions';
import { startDeletePost, setActivePost, startUpdateLike } from '../../Actions/postActions';

//////<<<<<------------------------------------------------``

const Post = () => 
{

    
////////////////////// BTN DELETE /////////////////////////

    const dispatch = useDispatch();

    const handleDeletePost = ( postId ) =>
    {
        dispatch( startDeletePost( postId ) );
    };

////////////////////////////////////////////////////////



////////////////////// LIKE /////////////////////////


    const { posts, activePost } = useSelector( state => state.post );

    const { uid, postsLiked } = useSelector( state => state.auth );

    const handleUpdateLike = ( post, like ) =>
    {

        dispatch( setActivePost( post ) );

        if( !postsLiked.find( ( id ) => id === activePost._id ) )
        {

        //---------\\ UPDATE LIKED USER //---------\\ 

            const newPostsLiked = [ ...postsLiked, activePost._id ];
       
            dispatch( starRegisterLike( newPostsLiked, uid ) );

        //-------------------------------------\\ 


        //---------\\ UPDATE LIKE POST //---------\\ 

            const newLike = like + 1;

            dispatch( startUpdateLike( newLike, activePost._id ) );

        //-------------------------------------\\ 


        }
        else
        {
            return;
        };

    };

////////////////////////////////////////////////////////


/************************************************************************************************** */

    return (

        <>

        { 
            posts.map( ( post ) => {

                return <div key={ post._id } className="col-md-3 postBox">

                    <div className="card cardPost">

                        <div className="card-body no_selection ">

                            <input disabled={ true } type="text" className="inputDisabled form-control text-center" name="titlePost" defaultValue={ post.titlePost } autoComplete="off" />
                            <textarea disabled={ true } className="inputDisabled form-control mt-2 text-center" name="bodyPost" defaultValue={ post.bodyPost } autoComplete="off" ></textarea>

                        </div>

                        <div className="card-footer">

                            <div className="row">

                                 
                                <div className="col-md-8 btnAling">
                                { 
                                    post.user._id === uid && 
                                    <button onClick={ () => { handleDeletePost( post._id ) } } className="btn btnLogout"><i className="fa fa-trash" aria-hidden="true"></i></button>
                                }
                                </div>

                                <div className="col-md-4 text-center">

                                    <span onClick={ () => { handleUpdateLike( post, post.likePost ) } } className="like form-control">♥ { post.likePost }</span>

                                </div>

                            </div>

                        </div>
                        
                    </div>

                </div>

            } ) 
        }

        </>


    );

};

//////---------------------------------------------->>>>>

export default Post;
