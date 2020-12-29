import { BackendConnect } from "../Backend/BackendConnect";
import { types } from "../Types/type";

//////<<<<<------------------------------------------------``

const startLoadCategories = () =>
{
    return async ( dispatch ) =>
    {

        try 
        {

            const request = await BackendConnect( "category" );

            const response = await request.json();

            if( response.ok )
            {
                dispatch( loadCategories( response.categories ) );
            }
            else
            {
                dispatch( loadCategories( [] ) );
            };

        } 
        catch( error ) 
        {
            console.log( error )
            return alert( "Something went wrong" );  
        };

    };
};

const loadCategories = ( categories ) => ( { type : types.postLoadCategories, payload : categories } );


//////---------------------------------------------->>>>>

export { startLoadCategories };