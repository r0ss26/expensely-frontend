import React, { useState, useContext, useEffect } from 'react'
import AuthContext from '../../context/auth/authContext'
import M from 'materialize-css';

const EditProfileForm = () => {

    // console.log(user)
    const authContext = useContext(AuthContext);

    const { user, updateProfile } = authContext

    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [profileImage, setProfileImage] = useState('');
    const [id, setId] = useState('')
    const [image, setImage] = useState('')

    useEffect(() => {
        if (user) setLastName(user.lastName)
        if (user) setFirstName(user.firstName)
        if (user) setEmail(user.email)
        if (user) setProfileImage(user.profileImage)
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
                            onChange={e => setFirstName(e.target.value)}
                        />
                        <label htmlFor="first_name">First Name</label>
                    </div>
                    <div className='row'>
                        <input
                            id="last_name"
                            type="text"
                            className="validate"
                            value={lastName}
                            onChange={e => setLastName(e.target.value)}
                        />
                        <label htmlFor="last_name">Last Name</label>
                    </div>
                    <div className='row'>
                        <input
                            id="email"
                            type="email"
                            className="validate"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className='row'>
                        <div className="file-field input-field">
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
                <div className='profile-img'>
                    <img src={profileImage ? `${profileImage}` : `${`https://via.placeholder.com/200?text=Upload+your+profile+image`}`} alt="profile" style={{ width: '200' }} />
                </div>
            </div>
            <button class="btn waves-effect waves-light" type="submit" name="action">Change Password
            <i class="material-icons right">lock</i>
            </button>
        </div>
    )
}

export default EditProfileForm
