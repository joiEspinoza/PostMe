import { types } from "../Types/type";

//////<<<<<------------------------------------------------``

const initialState = 
{
    posts : [],
    activePost : {}
};


const postReducer = ( state = initialState, action ) =>
{
    switch( action.type ) 
    {
        default: return state;
    };
};

//////---------------------------------------------->>>>>

export { postReducer };