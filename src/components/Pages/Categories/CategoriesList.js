import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../../context/auth/authContext';
import '../pageStyle.css';
import M from 'materialize-css/dist/js/materialize.min.js'
// import user from '../../charts/data';


const CategoriesList = () => {
  const authContext = useContext(AuthContext);
  const { getCategory, user, deleteCategory } = authContext;

  const [inputValue, setInputValue] = useState('');
  const [filteredOptions, setFilteredptions] = useState([]);

  useEffect(() => {
    // Required by materialize to initialize the modal
    const modal = document.querySelectorAll('.modal');
    M.Modal.init(modal);

    setFilteredptions(user.categories);
  }, [user]);

  // useEffect(() => {
  //     // Required by materialize to initialize the modal

  // }, [])

  // console.log(user.categories)
  const handleChange = (e) => {
    // console.log(e.target.value)
    setInputValue(e.target.value);

    const filtered = user.categories.filter((result) => {
      return result.name.toLowerCase().includes(inputValue.toLowerCase());
    });
    setFilteredptions(filtered);
  };

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      setInputValue('');
    }
  };

  const handleType = (e) => {
    const type = e.target.getAttribute('data-tag');
    console.log(type);
    setFilteredptions(
      user.categories.filter((item) => item.transactionType === type)
    );
  };

  const handleReset = () => {
    setInputValue('');
    setFilteredptions(user.categories);
  };

  const handleDelete = (id) => {
    deleteCategory(id);
  };

  const showCategories = (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4>Categories</h4>
      </li>
      {filteredOptions.map((item) => (
        <li key={item._id} className="collection-item row">
          <div className="text col s9">
            <span className="col s3">
              {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
            </span>
            <span className="col s3">
              {item.transactionType.charAt(0).toUpperCase() +
                item.transactionType.slice(1)}
            </span>
            <span
              className="dot"
              style={{ backgroundColor: `${item.color}` }}
            ></span>
          </div>
          <div className="icons">
            <a
              href="#edit-category-modal"
              className="secondary-content modal-trigger"
              onClick={() => getCategory(item)}
            >
              <i className="material-icons green-text">edit</i>
            </a>
            <a
              href="#!"
              className="secondary-content"
              onClick={() => handleDelete(item._id)}
            >
              <i className="material-icons red-text">delete</i>
            </a>
          </div>
        </li>
      ))}
    </ul>
  );
  return (
    <>
      <form>
        <div className="input-field">
          <input
            id="search"
            type="search"
            value={inputValue}
            onChange={handleChange}
            onKeyUp={(e) => handleKeyUp(e)}
          />
          <label className="label-icon" htmlFor="search">
            <i className="material-icons">search</i>
          </label>
          <i className="material-icons">close</i>
        </div>
      </form>

      <div>
        <button
          className="waves-effect waves-light btn"
          data-tag="expense"
          onClick={handleType}
        >
          Expense
        </button>
        <button
          className="waves-effect waves-light btn"
          data-tag="income"
          onClick={handleType}
        >
          Income
        </button>
        {/* sort name */}
        <button className="btn" onClick={() => handleReset()}>
          Reset
        </button>
      </div>

      {filteredOptions.length === 0 ? (
        <p>No categories found</p>
      ) : (
          showCategories
        )}
    </>
  );
};

export default CategoriesList;
