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
        case types.postLoad : return { ...state, posts : [ ...action.payload ] };

        case types.postSetActive : return { ...state, activePost : { ...action.payload } };
        
        default: return state;
    };
};

//////---------------------------------------------->>>>>

export { postReducer };