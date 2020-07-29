import React, { useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import EditCategoryForm from '../Forms/EditCategoryForm';

const EditCategoryModel = () => {
  useEffect(() => {
    // Required by materialize to initialize the modal
    const modal = document.querySelectorAll('.modal');
    M.Modal.init(modal);
  }, []);

  return (
    <div id="edit-category-modal" className="modal">
      <div className="modal-content center-align">
        <EditCategoryForm />
      </div>
    </div>
  );
};

export default EditCategoryModel;
