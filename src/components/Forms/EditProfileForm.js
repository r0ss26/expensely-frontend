import React, { useState, useContext, useEffect } from 'react'
import AuthContext from '../../context/auth/authContext'
import M from 'materialize-css';

const EditProfileForm = () => {

    const authContext = useContext(AuthContext);

    const { user, updateProfile } = authContext
    console.log(user._id)
    // Form state
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [imageFile, setImageFile] = useState('');
    const [id, setId] = useState('')


    useEffect(() => {
        if (user) setLastName(user.lastName)
        if (user) setFirstName(user.firstName)
        if (user) setEmail(user.email)
        if (user) setImageFile(user.profileImage)
        if (user) setId(user._id)
    }, [user])


    const handleFormSubmit = async (event) => {
        event.preventDefault();
        //  console.log('saved');
        if (!lastName || !firstName || !email) {
            M.toast({
                html: 'Please enter all required fields',
                displayLength: 4000,
                classes: 'red',
            });
            return;
        }
        try {
            updateProfile({ lastName, firstName, email, imageFile ,id});

            M.toast({
                html: 'Profile Saved',
                displayLength: 4000,
                classes: 'green',
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div id="edit-profile-form">
            <div className="row">
                <form className="col s6 offset-s4">
                    <div className="row">
                        <input
                            placeholder="Placeholder"
                            id="first_name"
                            type="text"
                            className="validate"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <label htmlFor="first_name">First Name</label>
                    </div>
                    <div className='row'>
                        <input
                            id="last_name"
                            type="text"
                            className="validate"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        <label htmlFor="last_name">Last Name</label>
                    </div>
                    <div className='row'>
                        <input
                            id="email"
                            type="email"
                            className="validate"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className='row'>
                        <div className="file-field input-field">
                            <div className="btn">
                                <span>Upload Profile Image</span>
                                <input
                                    type="file"
                                    name={imageFile}
                                    onChange={e => setImageFile(e.target.files[0])}
                                />
                            </div>
                            <div className="file-path-wrapper">
                                <input className="file-path validate" type="text" />
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
        </div>
    )
}

export default EditProfileForm
