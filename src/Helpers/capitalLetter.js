

const CapitalLetter = ( string = "" ) =>
{
    string.toLowerCase();
    return string.charAt(0).toUpperCase() + string.slice(1);
};

//////---------------------------------------------->>>>>

export { CapitalLetter };
