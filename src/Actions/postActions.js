import { BackendConnect } from "../Backend/BackendConnect";

//////<<<<<------------------------------------------------``

const startRegisterPost = ( post ) =>
{
    return async () =>
    {
        try 
        {
            const request = await BackendConnect( "post", post, "POST" );

            const response = await request.json();
            
            if( response.ok )
            {
                alert( response.msg );
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

//////---------------------------------------------->>>>>

export { startRegisterPost };