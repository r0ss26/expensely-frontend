import React, { useState, useContext } from 'react';
import AuthContext from '../../context/auth/authContext'
import M from 'materialize-css/dist/js/materialize.min.js';
import '@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.base-theme.react.css';
import '@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.material-theme.react.css';
import { SliderPicker } from 'react-color';

const CreateCategoryForm = () => {

    const [transactionType, setTransactionType] = useState('');
    const [name, setName] = useState('');
    const [color, setColor] = useState('');

    const authContext = useContext(AuthContext);
    const { addCategory } = authContext;

    const handleFormSubmit = () => {
        if (name === '' || color === '' || transactionType === '') {
            M.toast({
                html: 'Please complete all input',
                displayLength: 4000,
                classes: 'red',
            });
        } else {
            const formData = {
                transactionType,
                name,
                color,
            };


            M.toast({
                html: 'Category Added',
                displayLength: 4000,
                classes: 'green',
            });

            addCategory(formData);
            setColor('')
            setName('')
            setTransactionType('')
        }
    };

    const handleColor = (selected) => {
        const colorArr = Object.values(selected.rgb);
        const rgb = `rgb(${colorArr[0]},${colorArr[1]},${colorArr[2]})`;
        setColor(rgb);
    };

    return (
        <>
            <h4>Add a new category</h4>
            <p>Select expense or income</p>
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
                        name="categoryName"
                        type="text"
                        className="categoryName"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label className="active" htmlFor="input">Enter a category name</label>
                </div>

                <div className="input-field col s6">
                    <label className="active" htmlFor="color">Pick a color</label>
                    <SliderPicker
                        color={color}
                        onChangeComplete={handleColor}
                    // styles={{marginTop: 10 }}
                    />
                </div>
            </form>
            <div className="modal-footer" >
                <a
                    id="submit-category"
                    href="#!"
                    data-tag="addCategory"
                    className="waves-effect waves-green btn-flat"
                    onClick={handleFormSubmit}
                >
                    Add Category
                 </a>
            </div>
        </>
    )
}

export default CreateCategoryForm