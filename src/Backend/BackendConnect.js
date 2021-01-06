
//---------\\ SERVER URL //---------\\ 

const baseUrl = process.env.REACT_APP_API_BASE_URL;

//----------------------------------\\ 


const BackendConnect = ( endpoint, data = {}, method = "GET" ) =>
{
    
    const url = `${ baseUrl }/${ endpoint }`; //localhost:4030/api/auth/

    //console.log( url );

    if( method === "GET" )
    {
        return fetch( url );
    }
    else
    {
        return fetch( 
            
            url, 
            { 
                method, 
                headers : { "Content-type" : "application/json" },
                body : JSON.stringify( data )
            } 
        );
    };

};

//////---------------------------------------------->>>>>

export { BackendConnect };