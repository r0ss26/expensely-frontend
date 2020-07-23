import React, { useState, useEffect, useContext } from 'react'
import AuthContext from "../../context/auth/authContext"
import M from 'materialize-css/dist/js/materialize.min.js';
import FontIconPicker from '@fonticonpicker/react-fonticonpicker';
import '@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.base-theme.react.css';
import '@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.material-theme.react.css';
import iconsDB from './icons'


const EditCategoryModel = () => {

    // Default transaction type is expense
    const [transactionType, setTransactionType] = useState('expense');
    const [name, setName] = useState('')
    const [color, setColor] = useState('')
    const [icon, setIcon] = useState('')

    const authContext = useContext(AuthContext)
    const { current_category, updateCategory, user, loadCurrent } = authContext
    // console.log("edit modal", current_category)


    // console.log(current_category.icon)
    // if (category) { const currentCategoryId = category._id }


    // const [categories, setCategories] = useState([]);

    // const handleChange = (value) => {
    //     setIcon(value)
    // }

    // const getCategory = async(id) => {
    //     return await axios.get(`http://localhost:5000/categories/${id}`) 
    // }


    // const rgb = (color) => {
    //     color.substring(4, rgb.length - 1)
    //     .replace(/ /g, '')
    //     .split(',');
    // } 

    const rgb = 'rgb(58,200,222)'.match(/\d+/g);

    useEffect(() => {
        if (current_category) {
            setName(current_category.name)
            setColor(current_category.color)
            setIcon(current_category.icon)
            // console.log(color)
            // console.log(icon)
        }
    }, [current_category])


    // const props = {
    //     icons: iconsDB,
    //     theme: 'bluegrey',
    //     renderUsing: 'class',
    //     value: icon,
    //     onChange: handleChange,
    //     isMulti: false,
    // };

    useEffect(() => {
        // Required by materialize to initialize the modal
        const modal = document.querySelectorAll('.modal');
        M.Modal.init(modal);
    }, [])



    const handleFormSubmit = () => {

        const formData = {
            id: current_category._id,
            name,
        }

        console.log("formData", formData)
        updateCategory(formData)
    }


    return (
        <>
            <div id="edit-category-modal" className="modal">
                <div className="modal-content center-align">
                    <h4>Edit Category</h4>
                    <a
                        id="expense"
                        className={`waves-effect waves-light btn ${
                            transactionType === 'expense' ? 'disabled' : ''
                            }`}
                        onClick={() => setTransactionType('expense')}
                    >
                        <i className="material-icons right">money_off</i>Expense
                    </a>
                    <a
                        id="income"
                        className={`waves-effect waves-light btn ${
                            transactionType === 'income' ? 'disabled' : ''
                            }`}
                        onClick={() => setTransactionType('income')}
                    >
                        <i className="material-icons left">attach_money</i>Income
                    </a>

                    <form>
                        <div className="input-field col s6">
                            <input
                                name="input"
                                type="text"
                                className="category_name"
                                value={name}
                                onChange={e => {
                                    // console.log(e.target.value)
                                    setName(e.target.value)
                                }}
                            />
                            <label htmlFor="input"></label>
                        </div>
                        <div className="input-field col s6">

                            {/* Icon select */}
                        </div>
                        <div className="input-field col s6">
                            {/* <input
                                name="color"
                                onChange={e => setColor(e.target.value)}
                                id="color"
                                type="color"
                                value={() => console.log(color)}

                            /> */}
                            <label htmlFor="color">Color</label>
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <a
                        href="#!"
                        className="modal-close waves-effect waves-green btn-flat"
                        onClick={handleFormSubmit}
                    >
                        Edit Category
                 </a>
                </div>
            </div>
        </>
    )
}

export default EditCategoryModel
