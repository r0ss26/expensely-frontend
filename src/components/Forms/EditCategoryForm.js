import React, { useState, useEffect, useContext } from 'react';
import AuthContext from '../../context/auth/authContext';
import M from 'materialize-css/dist/js/materialize.min.js';
import { SliderPicker } from 'react-color';

const EditCategoryForm = () => {
  // Default transaction type is expense
  const [transactionType, setTransactionType] = useState('');
  const [name, setName] = useState('');
  const [color, setColor] = useState('');

  const authContext = useContext(AuthContext);
  const { currentCategory, updateCategory } = authContext;

  useEffect(() => {
    //fill in with current values
    if (currentCategory) {
      setName(currentCategory.name);
      setColor(currentCategory.color);
      setTransactionType(currentCategory.transactionType);
    }
  }, [currentCategory]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!name || !color || !transactionType) {
      M.toast({
        html: 'Please enter all required fields',
        displayLength: 4000,
        classes: 'red',
      });
      return;
    }
    try {
      const formData = {
        id: currentCategory._id,
        name,
        color,
        transactionType,
      };
      updateCategory(formData);
      M.toast({
        html: 'Category updated',
        displayLength: 4000,
        classes: 'green',
      });

      //clear input
      setColor('');
      setName('');
      setTransactionType('');
    } catch (error) {
      console.log(error);
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
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label htmlFor="input"></label>
        </div>

        <div className="input-field col s6">
          <label htmlFor="color">Pick Color</label>
          <SliderPicker color={color} onChangeComplete={handleColor} />
        </div>
      </form>

      <div className="modal-footer">
        <a
          id="save-category"
          href="#!"
          className="waves-effect waves-green btn-flat"
          onClick={handleFormSubmit}
        >
          Edit Category
        </a>
      </div>
    </>
  );
};

export default EditCategoryForm;
