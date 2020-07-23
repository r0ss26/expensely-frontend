import React, { useContext, useState, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import capitalize from '../../utils/capitalize';
import M from 'materialize-css';

const CategorySelect = (props) => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;

  let categories = [];
  if (user)
    categories = user.categories.filter(
      (category) => category.type === props.transactionType
    );

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

  // update the categories when the transactionType changes
  useEffect(() => {
    console.log('type changed');
    if (user)
      categories = user.categories.filter(
        (category) => category.type === props.transactionType
      );
  }, [props.transactionType]);

  return (
    <>
      <select
        value={props.value}
        onChange={(event) => props.onSelect(event.target.value)}
        className="category-select no-autoinit"
        name="category"
        style={{ maxHeight: '50px' }}
        size="5"
        required
      >
        <option value="">Choose a category</option>
        {categories &&
          categories.map((category) => (
            <option key={category._id} value={category.name}>
              {capitalize(category.name)}
            </option>
          ))}
      </select>
      <label>Category</label>
    </>
  );
};

export default CategorySelect;
