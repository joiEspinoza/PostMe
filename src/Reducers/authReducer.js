import { types } from "../Types/type";

//////<<<<<------------------------------------------------``

const initialState = 
{
    uid : null,
    name : null,
    postsLiked : [],
    logged : false

};

const authReducer = ( state = initialState, action ) =>
{
    switch ( action.type ) 
    {
        case types.authLogin : return { ...state, ...action.payload  };

        case types.authLogout : return { ...state, ...initialState };
        
        default: return state;
    };
    
};

//////---------------------------------------------->>>>>

export { authReducer };