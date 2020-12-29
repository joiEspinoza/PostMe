import { types } from "../Types/type";

//////<<<<<------------------------------------------------``

const cleanState = () => 
{
    localStorage.clear();
    return { type : types.clean }; 
};

     


//////---------------------------------------------->>>>>

export { cleanState };