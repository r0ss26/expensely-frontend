import React, { useEffect } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import ChangePasswordForm from '../../Forms/ChangePasswordForm';


const ChangePasswordModal = (props) => {
    //console.log(props)

   
    useEffect(() => {
        const modal = document.querySelectorAll('.editPasswordModal');
        M.Modal.init(modal);
    }, []);

    return (
        <>
            <div id="change-password-modal" className="modal editPasswordModal">
                <div className="modal-content center-align">
                    <ChangePasswordForm id={props.userId} />
                </div>
            </div>
        </>
    )
}

export default ChangePasswordModal
