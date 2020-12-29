import React from 'react';
import { useSelector } from 'react-redux';
import Categories from '../ui/Categories';
import Category from '../ui/Category';
import SideBar from '../ui/SideBar';

//////<<<<<------------------------------------------------``

const HomeScreen = () => 
{

    const { category } = useSelector( state => state.post );

    return (


            <div className="row">

                <SideBar/>

                { category === "" ? <Categories/> : <Category/> }
                
            </div>

    );
};

//////---------------------------------------------->>>>>

export default HomeScreen;