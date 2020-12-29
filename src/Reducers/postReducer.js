import { types } from "../Types/type";

//////<<<<<------------------------------------------------``

const initialState = 
{
    posts : [],
    categories : [],
    activeCategory : ""
};


const postReducer = ( state = initialState, action ) =>
{
    switch( action.type ) 
    {
        case types.postLoad : return { ...state, posts : [ ...action.payload ] };

        case types.postSetActiveCategory : return { ...state, activeCategory : action.payload };

        case types.postLoadCategories : return { ...state, categories : [ ...action.payload ] };

        case types.clean : return { ...state, ...initialState };
        
        default: return state;
    };
};

//////---------------------------------------------->>>>>

export { postReducer };