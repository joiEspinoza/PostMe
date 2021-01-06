import { types } from "../Types/type";

//////<<<<<------------------------------------------------``

const initialState = 
{
    posts : null,
    categories : [],
    activeCategory : { color : "", categoryTitle : "", categoryId : "", user : {} }
};


const postReducer = ( state = initialState, action ) =>
{
    switch( action.type ) 
    {
        case types.postLoad : return { ...state, posts : [ ...action.payload ] };

        case types.postSetActiveCategory : return { ...state, activeCategory : { color : action.payload.color, categoryTitle : action.payload.categoryTitle, categoryId : action.payload._id, user : action.payload.user } };

        case types.postLoadCategories : return { ...state, categories : [ ...action.payload ] };

        case types.clean : return { ...state, ...initialState };
        
        default: return state;
    };
};

//////---------------------------------------------->>>>>

export { postReducer };