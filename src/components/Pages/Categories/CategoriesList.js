import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../../context/auth/authContext';
import '../pageStyle.css';
import M from 'materialize-css/dist/js/materialize.min.js'
import EditCategoryModel from '../../Modals/EditCategoryModel';
import capitalize from '../../../utils/capitalize';
import ConfirmationModal from '../../Modals/ConfirmationModal/ConfirmationModal'


const CategoriesList = () => {
  const authContext = useContext(AuthContext);
  const { getCategory, user, deleteCategory } = authContext;

  const [inputValue, setInputValue] = useState('');
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [toDelete, setToDelete] = useState('')

  useEffect(() => {
    // Required by materialize to initialize the modal
    const modal = document.querySelectorAll('.modal');
    M.Modal.init(modal);
    if (user) setFilteredOptions(user.categories);
  }, [user]);

  const handleChange = (e) => {

    setInputValue(e.target.value);

    const filtered = user.categories.filter((result) => {
      return result.name.toLowerCase().includes(inputValue.toLowerCase());
    });
    setFilteredOptions(filtered);
  };

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      setInputValue('');
    }
  };

  const handleType = (e) => {
    const type = e.target.getAttribute('data-tag');
    //console.log(type);
    setFilteredOptions(
      user.categories.filter((item) => item.transactionType === type)
    );
  };

  const handleReset = () => {
    setInputValue('');
    setFilteredOptions(user.categories);
  };

  const handleDelete = (id) => {
    deleteCategory(id);
  };

  const handleSort = () => {
    let sorted = []
    sorted = user.categories.slice().sort((a, b) => {
      if (a.name < b.name) { return -1 }
      if (a.name > b.name) { return 1 }
      return 0
    })
    setFilteredOptions(sorted)
  }
  // console.log("sot", sorted)
  // setFilteredOptions(sorted)


  const showCategories = (
    <>
      <table className="striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Color</th>
          </tr>
        </thead>
        <tbody>
          {filteredOptions.map((item) => (
            <tr key={item._id}>
              <td>{capitalize(item.name)}</td>
              <td> {capitalize(item.transactionType)}</td>
              <td> <span className="dot" style={{ backgroundColor: `${item.color}` }}></span></td>
              <td className="edit-category">
                <a
                  className="waves-effect waves-light btn modal-trigger"
                  href="#edit-category-modal"
                  onClick={() => getCategory(item)}
                >
                  Edit
            </a>
              </td>
              <td>
                <a
                  href="#confirmationModal"
                  className="waves-effect waves-light btn modal-trigger"
                  onClick={() => setToDelete(item._id)}
                >
                  Delete
            </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <EditCategoryModel />
      <ConfirmationModal
        onConfirm={() => handleDelete(toDelete)}
        confirmationText="Are you sure you want to delete this item?"
        confirm="Delete"
        decline="Keep"
      />
    </>
  )


  return (
    <>
      <div className="container">
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
            onClick={(e) => handleType(e)}
          >
            Expense
        </button>
          <button
            className="waves-effect waves-light btn"
            data-tag="income"
            onClick={(e) => handleType(e)}
          >
            Income
        </button>

          <button className="btn" onClick={() => handleReset()}>
            Reset
        </button>
          <button
            className="waves-effect waves-light btn"
            onClick={() => handleSort()}
          >
            Sort A-Z
        </button>
        </div>

        {filteredOptions.length === 0 ? (
          <p>No categories found</p>
        ) : (
            showCategories
          )}
      </div>
    </>
  );
};

export default CategoriesList;
