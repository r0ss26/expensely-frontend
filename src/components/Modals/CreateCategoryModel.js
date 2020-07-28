import React, { useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import CreateCategoryForm from '../Forms/CreateCategoryForm';

const CreateCategoryModel = () => {
  // Default transaction type is expense

  useEffect(() => {
    // Required by materialize to initialize the modal
    const modal = document.querySelectorAll('.modal');
    M.Modal.init(modal);
  }, []);



  return (
    <>
      <div id="create-category-modal" className="modal">
        <div className="modal-content center-align">
          <CreateCategoryForm />
        </div>
      </div>
    </>
  );
};

export default CreateCategoryModel;