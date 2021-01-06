import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { starRegisterLike } from '../../Actions/authActions';
import { startDeletePost, startUpdateLike  } from '../../Actions/postActions';

//////<<<<<------------------------------------------------``

const Post = () => 
{

////////////////////// LIKE /////////////////////////


    let { posts, activeCategory } = useSelector( state => state.post );

    const { uid, postsLiked } = useSelector( state => state.auth );

    const dispatch = useDispatch();

    const handleUpdateLike = ( postId, like ) =>
    {

        const result = postsLiked.find( ( id ) => id === postId );
     

        if( !result )
        {

            //---------\\ UPDATE LIKED USER //---------\\ 

            const newPostsLiked = [ ...postsLiked, postId ];
       
            dispatch( starRegisterLike( newPostsLiked, uid ) );

            //-------------------------------------\\


            //---------\\ UPDATE LIKE POST //---------\\ 

            const newLike = like + 1;

            dispatch( startUpdateLike( newLike, postId ) );

            //-------------------------------------\\ 

        };

    };

    const handleColorLike = ( postId ) =>
    {
        const result = postsLiked.find( ( id ) => id === postId ); 

        if( result )
        {
            return "text-danger";
        };

    };

////////////////////////////////////////////////////////




////////////////////// BTN DELETE /////////////////////////

    
    const handleDeletePost = ( postId ) =>
    {
        
        let purgePostsLiked = [];

        purgePostsLiked = 
        [ ...postsLiked.filter( ( id ) => id !== postId  ) ];
     
        dispatch( starRegisterLike( purgePostsLiked, uid ) );

        dispatch( startDeletePost( postId ) );
           
    };

////////////////////////////////////////////////////////




////////////////////// FILTRO /////////////////////////

    posts = [ ...posts.filter( ( post ) => 
    post.categoryPost === activeCategory.categoryTitle ) ];

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

                        <div className="card-footer" style={ { backgroundColor : activeCategory.color  } }>

                            <div className="row">

                                 
                                <div className="col-md-8 btnAling">
                                { 
                                    post.user._id === uid && 
                                    <button onClick={ () => { handleDeletePost( post._id ) } } className="btn btn-dark btnDeletePost form-control" ><i className="fa fa-trash" aria-hidden="true"></i></button>
                                }
                                </div>

                                <div className="col-md-4 text-center">

                                    <span onClick={ () => { handleUpdateLike( post._id, post.likePost ) } } className={`like form-control ${ handleColorLike( post._id ) }`}>{ `♥ ${ post.likePost }` }</span>

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
