import React, { useState, useContext, useEffect } from 'react'
import AuthContext from '../../context/auth/authContext'
import M from 'materialize-css';
import ChangePasswordModal from '../Modals/ChangePasswordModal/ChangePasswordModal';

const EditProfileForm = () => {


    const authContext = useContext(AuthContext);

    const { user, updateProfile } = authContext

    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [id, setId] = useState('')
    const [image, setImage] = useState('')
    const [sendId, setSendId] = useState('')

    useEffect(() => {
        if (user) setLastName(user.lastName)
        if (user) setFirstName(user.firstName)
        if (user) setEmail(user.email)
        if (user) setId(user._id)
    }, [user])


    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (!email || !firstName || !lastName) {
            M.toast({
                html: 'Please enter all required fields',
                displayLength: 4000,
                classes: 'red',
            });
            return;
        }
        try {
            const formData = new FormData()

            if (image) formData.append('profileImage', image)
            formData.append('lastName', lastName)
            formData.append('firstName', firstName)
            formData.append('email', email)

            updateProfile(formData, id);

            M.toast({
                html: 'Profile Saved',
                displayLength: 4000,
                classes: 'green',
            });
            //clear form
            // setLastName('')
            // setFirstName('')
            // setEmail('')
            // setProfileImage('')
            // setId('')
            setImage('')

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div id="edit-profile-form">
                <h3 className="center">Edit your profile</h3>
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <input
                                    placeholder="First Name"
                                    id="first_name"
                                    type="text"
                                    className="validate"
                                    value={firstName}
                                    onChange={e => setFirstName(e.target.value)}
                                />
                                <label className="active" htmlFor="first_name">First Name</label>
                            </div>
                        </div>
                        <div className='row'>
                            <div className="input-field col s12">
                                <input
                                    placeholder="Last Name"
                                    id="last_name"
                                    type="text"
                                    className="validate"
                                    value={lastName}
                                    onChange={e => setLastName(e.target.value)}
                                />
                                <label className="active" htmlFor="last_name">Last Name</label>
                            </div>
                        </div>

                        <div className='row'>
                            <div class="input-field col s12">
                                <input
                                    placeholder="Email"
                                    id="email"
                                    type="email"
                                    className="validate"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                                <label className="active" htmlFor="email">Email</label>
                            </div>
                        </div>
                        <div className='row'>
                            <div className="file-field input-field col s12">
                                <div className="btn">
                                    <span>Upload Image</span>
                                    <input
                                        type="file"
                                        name=''
                                        onChange={e => setImage(e.target.files[0])}
                                    // setProfileImage(e.target)}
                                    />
                                </div>
                                <div className="file-path-wrapper">
                                    <input className="file-path validate" type='text' />
                                </div>
                            </div>
                        </div>
                        <div>
                            <button
                                className="btn waves-effect waves-light right"
                                name="action"
                                onClick={handleFormSubmit}
                            >Save Profile
                     <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </form>
                </div>
                <a
                    href="#change-password-modal"
                    className="waves-effect waves-light btn red lighten-1 modal-trigger"
                    onClick={() => setSendId(id)}
                >
                    <span>Change Password  <i className="material-icons right">lock</i></span>
                </a>
                <ChangePasswordModal userId={sendId} />
            </div>

        </>
    )
}

export default EditProfileForm
