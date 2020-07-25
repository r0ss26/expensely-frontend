import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import capitalize from '../../utils/capitalize';
import M from 'materialize-css';
import './categorySelectStyles.css'

const CategorySelect = (props) => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;

  let categories = [];
  if (user)
    categories = user.categories.filter(
      (category) => category.transactionType === props.transactionType
    );
    //console.log(categories)
  // console.log(categories)
  // Needed to overwrite materilize-css initializer, which resets dynamic elements
  useEffect(() => {
    const select = document.querySelectorAll('.category-select');
    M.FormSelect.init(select);
  }, [categories]);

  useEffect(() => {
    // Required by materialize to initialize the Select
    const select = document.querySelectorAll('.category-select');
    M.FormSelect.init(select);
  }, []);

  return (
    <>
      <select
        value={props.value}
        onChange={(event) => props.onSelect(event.target.value)}
        className="category-select no-autoinit"
        name="category"
        size="5"
        required
      >
        <option value="" className="colorIcon">Choose a category</option>
        {categories &&
          categories.map((category) => (
            <>
              <option key={category._id} value={category.name} data-color={category.color} data-icon="/square-regular.svg" style={{ backgroundColor: `${category.color}` }}>
                {capitalize(category.name)}
                {/* <span className='dot' style={{ backgroundColor: `${category.color}` }}></span> */}
              </option>
            </>
          ))}
      </select>
      <label>Category</label>
    </>
  );
};

export default CategorySelect;
