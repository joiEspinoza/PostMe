import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startCreateCategory, startDeleteCategory } from '../../Actions/categoryActions';
import { setCategory, startDeletePosts } from '../../Actions/postActions';
import { CapitalLetter } from '../../Helpers/capitalLetter';
import { useForm } from '../../Hook/useForm';

//////<<<<<------------------------------------------------``

const SideBar = () => 
{

////////////////////// BTN BACK //////////////////////

    const { activeCategory } = useSelector( state => state.post );

    const dispatch = useDispatch();

    const handleBack = () =>
    {
        dispatch( setCategory( { color : "", categoryTitle:"" } ) );
    };

/////////////////////////////////////////////////////




////////////////////// BTN CREATE CATEGORY //////////////////////

    const { uid } = useSelector( state => state.auth );

    const initialFormValues =
    {
        categoryTitle : "",
        color :  "#fa9031",
        user : uid
    };

    const [ formValues, handleInputChange, reset ] = useForm( initialFormValues );

    const { categoryTitle, color } = formValues;
    
    const handleCreateCategory = ( event ) =>
    {
        event.preventDefault();

        dispatch( startCreateCategory( formValues ) );

        reset();

        document.getElementById( "close" ).click();

        
    };

//////////////////////////////////////////////////////////


/////////////////////////// BTN DELETE CATEGORY /////////////////////////////

const { posts } = useSelector( state => state.post );

const handleDeleteCategory = () =>
{
    const postsDeleted = [ ...posts.filter( ( post ) => activeCategory.categoryTitle === post.categoryPost ) ];
    
    const postsDeletedId = [ ...postsDeleted.map( ( post ) => post._id ) ];

    console.log(postsDeletedId);

    dispatch( startDeleteCategory( activeCategory.categoryId ) );

    dispatch( startDeletePosts( activeCategory.categoryTitle  ) );

    document.getElementById( "closeConfirm" ).click();

};


/////////////////////////////////////////////////////////////////////////////////////


/*********************************************************************************************************** */

    
    return (

        <>
            <div className="col-md-2 sideBar">

                { activeCategory.categoryTitle === "" ? 

                    <i className="fa fa-plus-circle mt-5 pointerAddCategory" data-bs-toggle="modal" data-bs-target="#modalCategory" aria-hidden="true">
                        <p className="textAdd">Add category</p>
                    </i>


                  
                    :
                    <>
                        <input defaultValue={ CapitalLetter( activeCategory.categoryTitle ) } className="sideCatego form-control text-center categoryName" disabled={ true } style={ { backgroundColor : activeCategory.color } }/>
                        {
                            uid === activeCategory.user._id &&
                            <button className="sideButton form-control mt-3" data-bs-toggle="modal" data-bs-target="#modalConfirm"><i className="iSide fa fa-trash" style={ { color:"#fa9031" } } aria-hidden="true"></i></button> 
                        }
                        <button className="sideButton form-control mt-3" onClick={ handleBack }><i className="iSide fa fa-arrow-left" style={ { color:"#fa9031" } } aria-hidden="true"></i></button>
                    </>

                }
                
            </div>

            {/*Modal CREAT CATEGO*/}
            <div className="modal fade" id="modalCategory" tabIndex="-1" aria-labelledby="modalCategoryLabel" aria-hidden="true">
                
                <div className="modal-dialog modal-dialog-centered">

                    <div className="modal-content">

                        <div className="modal-header">

                            <button type="button" id="close" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

                        </div>

                        <form onSubmit={ handleCreateCategory }>

                            <div className="modal-body">
                                
                                    <div className="form-group">
                                        <label><small className="text-muted">Category title</small></label>
                                        <input type="text" className="form-control" name="categoryTitle" autoComplete="off" value={ categoryTitle } onChange={ handleInputChange }/>
                                    </div>

                                    <div className="form-group mt-3">
                                        <label><small className="text-muted">Category Color</small></label>
                                        <input type="color" className="form-control colorInp" name="color" value={ color } onChange={ handleInputChange }/>
                                    </div>

                            </div>

                            <div className="modal-footer">
                                <button type="submit" className="btn btn-dark form-control"><i className="fa fa-comments" aria-hidden="true"></i>
</button>
                            </div>


                        </form>

                    </div>

                </div>

            </div>
            

            {/*Modal Delete Catego*/}
            <div className="modal fade" id="modalConfirm" tabIndex="-1" aria-labelledby="modalConfirmLabel" aria-hidden="true">
                
                <div className="modal-dialog modal-dialog-centered">
                    
                    <div className="modal-content">
                        
                        <div className="modal-header">
                            <button type="button" id="closeConfirm" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        
                        <div className="modal-body text-center">
                            Are you sure about delete this category?
                        </div>

                        <div className="modal-footer">
                            <button onClick={ ()=>{ handleBack(); handleDeleteCategory(); } } type="button" className="btn btnLogout">Yes</button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No</button>   
                        </div>
                    
                    </div>
                
                </div>
            
            </div>

        </>

    );

};

//////---------------------------------------------->>>>>


export default SideBar;
