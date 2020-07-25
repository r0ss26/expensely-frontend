import React, { useState, useEffect, useContext } from 'react';
import AuthContext from '../../context/auth/authContext';
import M from 'materialize-css/dist/js/materialize.min.js';
import '@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.base-theme.react.css';
import '@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.material-theme.react.css';
import { SliderPicker } from 'react-color';

const CreateCategoryModel = () => {
  // Default transaction type is expense
  const [transactionType, setTransactionType] = useState('');
  const [name, setName] = useState('');
  const [color, setColor] = useState('');

  const authContext = useContext(AuthContext);
  const { addCategory } = authContext;

  useEffect(() => {
    // Required by materialize to initialize the modal
    const modal = document.querySelectorAll('.modal');
    M.Modal.init(modal);
  }, []);

  // Form state
  // const [input, setInput] = useState({});

  //   const handlehange = (event) =>
  //     setInput({
  //       ...input,
  //       [event.currentTarget.name]: event.currentTarget.value,
  //     });

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
      console.log(formData);
      addCategory(formData);
    }
  };

  const handleColor = (selected) => {
    const colorArr = Object.values(selected.rgb);
    const rgb = `rgb(${colorArr[0]},${colorArr[1]},${colorArr[2]})`;
    setColor(rgb);
    // console.log(color)
  };

  return (
    <>
      <div id="create-category-modal" className="modal">
        <div className="modal-content center-align">
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
                name="input"
                type="text"
                className="category_name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="input">Enter a category name</label>
            </div>
            {/* <div className="input-field col s6">
                            <p>Icons</p>
                        </div> */}
            <div className="input-field col s6">
              <label htmlFor="color">Pick a color</label>
              <SliderPicker
                color={color}
                onChangeComplete={handleColor}
                // styles={{marginTop: 10 }}
              />
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <a
            href="#!"
            className="modal-close waves-effect waves-green btn-flat"
          >
            Cancel
          </a>
          <a
            href="#!"
            className="modal-close waves-effect waves-green btn-flat"
            onClick={handleFormSubmit}
          >
            Add Category
          </a>
        </div>
      </div>
    </>
  );
};

export default CreateCategoryModel;
