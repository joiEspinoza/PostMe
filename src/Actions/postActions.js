import { BackendConnect } from "../Backend/BackendConnect";
import { types } from "../Types/type";

//////<<<<<------------------------------------------------``

const startRegisterPost = ( post ) =>
{
    return async ( dispatch ) =>
    {
        try 
        {
            const request = await BackendConnect( "post", post, "POST" );

            const response = await request.json();
            
            if( response.ok )
            {
                dispatch( startLoadPosts() );
                
                dispatch( setActivePost( response.post ) );
            }
            else
            {
                if( !response.errors )
                {
                    return alert( response.msg );
                };

                if( response.errors.titlePost )
                {
                    alert( response.errors.titlePost.msg );
                };

                if( response.errors.bodyPost )
                {
                    return alert( response.errors.bodyPost.msg );
                };
            };
        } 
        catch( error ) 
        {
            console.log( error )
            return alert( "Something went wrong" );
        };
    };
};

const startLoadPosts = () =>
{
    return async ( dispatch ) =>
    {
        try 
        {
            const request = await BackendConnect( "post" ); 
            
            const response = await request.json();

            if( response.ok )
            {
                dispatch( loadPost( response.posts ) );
            }
            else
            {
                alert( response.msg )
            };
        } 
        catch( error ) 
        {
            console.log( error )
            return alert( "Something went wrong" );
        };
    };
};

const loadPost = ( posts ) => ( { type : types.postLoad, payload : posts } );


const startUpdateLike = ( likePost, _id ) =>
{
    return async ( dispatch ) =>
    {
        try 
        {
            const request = await BackendConnect( "post", { likePost, _id }, "PUT" );

            const response = await request.json();

            if( response.ok )
            {
                dispatch( startLoadPosts() );
            };
        } 
        catch( error ) 
        {
            console.log( error )
            return alert( "Something went wrong" );
        };
    };
};

const startDeletePost = ( postId ) =>
{
    return async ( dispatch ) =>
    {
        try 
        {

            const request = await BackendConnect( `post/${ postId }`, {}, "DELETE" );

            const response = await request.json();

            if( response.ok )
            {
                dispatch( startLoadPosts() );
            }
            else
            {
                alert( response.msg );
            };
            
        } 
        catch( error ) 
        {
            console.log( error )
            return alert( "Something went wrong" );
        };
    };
};

const setActivePost = ( post ) => ( { type : types.postSetActive, payload : post  } );


//////---------------------------------------------->>>>>

export { startRegisterPost, startLoadPosts, startDeletePost, setActivePost, startUpdateLike };