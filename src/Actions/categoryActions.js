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

const startCreateCategory = ( category ) =>
{
  
    return async( dispatch ) =>
    {
        try 
        {
            const request = await BackendConnect( "category", category, "POST" );

            const response = await request.json();

            if( response.ok )
            {
                dispatch( startLoadCategories() );
            }
            else
            {
                if( !response.errors )
                {
                    alert( response.msg );
                };

                if( response.errors.categoryTitle )
                {
                    alert( response.errors.categoryTitle.msg );
                };
                
            }
        } 
        catch( error )  
        {
            console.log( error )
            return alert( "Something went wrong" );  
        };
        
    };
};

const startDeleteCategory = ( categoryId ) =>
{
    return async ( dispatch ) =>
    {
        try 
        {
            
            const request = await BackendConnect( "category", { categoryId }, "DELETE" );

            const response = await request.json();
            
            if( response.ok )
            {
                dispatch( startLoadCategories() );
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

export { startLoadCategories, startCreateCategory, startDeleteCategory };