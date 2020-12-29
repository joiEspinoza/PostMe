import { types } from "../Types/type";

//////<<<<<------------------------------------------------``

const initialState = 
{
    posts : [],
    category : ""
};


const postReducer = ( state = initialState, action ) =>
{
    switch( action.type ) 
    {
        case types.postLoad : return { ...state, posts : [ ...action.payload ] };

        case types.postSetCategory : return { ...state, category : action.payload };

        case types.clean : return { ...state, ...initialState };
        
        default: return state;
    };
};

//////---------------------------------------------->>>>>

export { postReducer };