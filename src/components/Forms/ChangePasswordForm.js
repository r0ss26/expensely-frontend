import React, { useContext, useState, useEffect } from 'react'
import AuthContext from '../../context/auth/authContext'
import M from 'materialize-css/dist/js/materialize.min.js'

const ChangePasswordForm = (props) => {

    console.log(props)
    const authContext = useContext(AuthContext)

    const { error, changePassword, logout } = authContext

    const [currentPassword, setCurrentPassword] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [id, setId] = useState('')


    useEffect(() => {
        if (error) {
            M.toast({ html: `${error}`, displayLength: 4000, classes: 'red' })
        }
    }, [error])

    useEffect(() => {
        setId(props.id)
    }, [props.id])

    const formData = {
        currentPassword,
        password
    };

    const handleInput = (event, setInputState) => {
        setInputState(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault();

        if (password !== confirmPassword) {
            M.toast({ html: "Passwords do not match", displayLength: 4000, classes: "red" })
        } else {
            changePassword(formData, id)
           // logout()
            // register(formData)
            // if (!error) {
            //     logout()
            //     M.toast({ html: "Password successfully changed. Please login with new password", displayLength: 4000, classes: "green" })
            // }
        }

    }
    return (
        <div>
            <div class="row">
                <h3>Change Password</h3>
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <input
                                id="currentPassword"
                                type="password"
                                className="validate"
                                onChange={(event) => handleInput(event, setCurrentPassword)} value={currentPassword}
                            />
                            <label for="password">Enter Old password</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input
                                id="newPassword"
                                type="password"
                                className="validate"
                                onChange={(event) => handleInput(event, setPassword)}
                                value={password}
                            />
                            <label for="password">Enter New password</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input
                                id="confirmPassword"
                                type="password"
                                className="validate"
                                onChange={(event) => handleInput(event, setConfirmPassword)}
                                value={confirmPassword}
                            />
                            <label for="password">Repeat New Password</label>
                        </div>
                    </div>
                    <p>Please sign in again after successful password changed</p>
                    <div className="modal-footer">
                        <a href="#!"
                            className="modal-close waves-effect waves-green btn-flat"
                            onClick={handleSubmit}
                        >Change Password</a>
                    </div>
                </form>

            </div>

        </div>
    )
}

export default ChangePasswordForm
