import { BackendConnect } from "../Backend/BackendConnect";
import { types } from "../Types/type";

//////<<<<<------------------------------------------------``

const startRegisterAction = ( user ) =>
{
    return async () =>
    {
        try 
        {
            const request = await BackendConnect( "auth/register", user, "POST" );

            const response = await request.json();

            if( response.ok )
            {
                return alert( response.msg );
            }
            else
            {
                if( !response.errors )
                {
                    return alert( response.msg );
                };

                if( response.errors.password )
                {
                    alert( response.errors.password.msg );
                };

                if( response.errors.email )
                {
                    return alert( response.errors.email.msg );
                };

                if( response.errors.name )
                {
                    return alert( response.errors.name.msg );
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


const startLoginAction = ( user ) =>
{
    return async ( dispatch ) =>
    {

        try 
        {
           const request =  await BackendConnect( "auth", user, "POST" );//-->

           const response = await request.json();//<---

           if( response.ok )
           {
                dispatch( loginAction( response.userLogged ) );
           }
           else
           {
                if( !response.errors )
                {
                    return alert( response.msg );
                };

                if( response.errors.password )
                {
                    alert( response.errors.password.msg );
                };

                if( response.errors.email )
                {
                    return alert( response.errors.email.msg );
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

const loginAction = ( user ) => ( { type : types.authLogin, payload : user } );


const starRegisterLike = ( postsLiked, uid ) =>
{
    return async ( dispatch ) =>
    {
        try 
        {
            const request = await BackendConnect( "auth", { postsLiked, uid }, "PUT" );

            const response = await request.json();

            dispatch( loginAction( response.userLogged ) );

        } 
        catch( error ) 
        {
            console.log( error )
            return alert( "Something went wrong" );   
        };
    };
}

const logoutAction = () => ( { type : types.authLogout } );


//////---------------------------------------------->>>>>

export { startRegisterAction, startLoginAction, logoutAction, starRegisterLike };