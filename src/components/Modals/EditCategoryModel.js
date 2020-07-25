import React, { useState, useEffect, useContext } from 'react'
import AuthContext from "../../context/auth/authContext"
import M from 'materialize-css/dist/js/materialize.min.js';
import '@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.base-theme.react.css';
import '@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.material-theme.react.css';
import { SliderPicker } from 'react-color';
// import { CirclePicker, ChromePicker, SliderPicker } from 'react-color';
// import FontIconPicker from '@fonticonpicker/react-fonticonpicker';
// import iconsDB from './icons'


const EditCategoryModel = () => {

    // Default transaction type is expense
    const [transactionType, setTransactionType] = useState('');
    const [name, setName] = useState('')
    const [color, setColor] = useState('')

    const authContext = useContext(AuthContext)
    const { current_category, updateCategory } = authContext

    useEffect(() => {
        //fill in with current values
        if (current_category) {
            setName(current_category.name)
            setColor(current_category.color)
            setTransactionType(current_category.transactionType)
        }
    }, [current_category])


    useEffect(() => {
        // Required by materialize to initialize the modal
        const modal = document.querySelectorAll('.modal');
        M.Modal.init(modal);
    }, [])


    const handleFormSubmit = () => {
        const formData = {
            id: current_category._id,
            name,
            color,
            transactionType
        }
        updateCategory(formData)
        M.toast({ html: 'Successfully updated', displayLength: 4000, classes: 'red' })

        //clear input
        setColor('')
        setName('')
        setTransactionType('')

    }

    const handleColor = (selected) => {
        const colorArr = Object.values(selected.rgb)
        const rgb = `rgb(${colorArr[0]},${colorArr[1]},${colorArr[2]})`
        setColor(rgb)
        // console.log(color)
    }

    return (
        <>
            <div id="edit-category-modal" className="modal">
                <div className="modal-content center-align">
                    <h4>Edit Category</h4>
                    <button
                        id="expense"
                        className={`waves-effect waves-light btn ${
                            transactionType === 'expense' ? 'disabled' : ''
                            }`}
                        onClick={() => setTransactionType('expense')}
                    >
                        <i className="material-icons right">money_off</i>Expense
                    </button>
                    <button
                        id="income"
                        className={`waves-effect waves-light btn ${
                            transactionType === 'income' ? 'disabled' : ''
                            }`}
                        onClick={() => setTransactionType('income')}
                    >
                        <i className="material-icons left">attach_money</i>Income
                    </button>

                    <form>
                        <div className="input-field col s6">
                            <input
                                name="input"
                                type="text"
                                className="category_name"
                                value={name}
                                onChange={e => {
                                    setName(e.target.value)
                                }}
                            />
                            <label htmlFor="input"></label>
                        </div>
                        {/* <div className="input-field col s6">
                            <p>Icons</p>
                        </div> */}
                        <div className="input-field col s6">
                            <label htmlFor="color">Pick Color</label>
                            <SliderPicker
                                color={color}
                                onChangeComplete={handleColor}
                            />
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <a href="#!" className="modal-close waves-effect waves-green btn-flat">Cancel</a>
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
