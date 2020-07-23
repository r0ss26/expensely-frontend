import React, { useState, useEffect } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js';
import FontIconPicker from '@fonticonpicker/react-fonticonpicker';
import '@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.base-theme.react.css';
import '@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.material-theme.react.css';
import iconsDB from './icons'

const CreateCategoryModel = () => {
    // Default transaction type is expense
    const [icon, setIcon] = useState([])


    useEffect(() => {
        // Required by materialize to initialize the modal
        const modal = document.querySelectorAll('.modal');
        M.Modal.init(modal);

    }, []);

    const handleChange = (value) => {
        setIcon(value)
    }

    const props = {
        icons: iconsDB,
        theme: 'bluegrey',
        renderUsing: 'class',
        value: icon,
        onChange: handleChange,
        isMulti: false,
    };

    return (
        <>
            {/* <div id="category-modal" className="modal">
                <div className="modal-content center-align"> */}
                    <h4>Add a Category</h4>
                    <form>
                        <div className="input-field col s6">
                            <input
                                name="name"
                                id="name"
                                type="text"
                                className="category_name"
                            />
                            <label htmlFor="name">Name</label>
                        </div>

                        <div className="input-field col s6">
                            {/* <select
                                name="icon"
                                //   onChange={handleInputChange}
                                style={{ maxHeight: '50px' }}
                                size="5"
                            > */}

                            {/* <option>Choose a icon</option>

                            </select> */}
                            <FontIconPicker {...props} />
                            <label>Icon</label>
                        </div>

                        <div className="input-field col s6">
                            <input
                                name="color"
                                //   onChange={handleInputChange}
                                id="color"
                                type="color"
                            />
                            <label htmlFor="color">Color</label>
                        </div>

                    </form>
                {/* </div> */}
                <div className="modal-footer">
                    <a
                        href="#!"
                        className="modal-close waves-effect waves-green btn-flat"
                    //   onClick={handleFormSubmit}
                    >
                        Add Category
            </a>
                </div>
            {/* </div> */}
        </>
    )
}

export default CreateCategoryModel
