import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../../Actions/postActions';

//////<<<<<------------------------------------------------``

const SideBar = () => 
{

    const { activeCategory } = useSelector( state => state.post );

    const dispatch = useDispatch();

    const handleBack = () =>
    {
        dispatch( setCategory( "" ) );
    };


/*********************************************************************************************************** */

    
    return (

        <>
            <div className="col-md-2 sideBar">

                { activeCategory === "" ? 

                    <i className="fa fa-plus-circle mt-5 pointer" data-bs-toggle="modal" data-bs-target="#exampleModal" aria-hidden="true">
                        <p className="textAdd">Add category</p>
                    </i>

                  
                    :

                    <i onClick={ handleBack } className="fa fa-arrow-circle-left mt-5 pointer" aria-hidden="true"></i>

                }
                
            </div>

            {/*Modal*/}

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                
                <div className="modal-dialog modal-dialog-centered">

                    <div className="modal-content">

                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-body">
                            ...
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>

                    </div>

                </div>

            </div>
        
        </>

    );

};

//////---------------------------------------------->>>>>


export default SideBar;
