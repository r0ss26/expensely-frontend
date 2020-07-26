import React, { useContext, useState, useEffect } from 'react'
import './pageStyle.css'
import EditProfileForm from '../Forms/EditProfileForm'
import AuthContext from '../../context/auth/authContext'

const Profile = () => {


    const authContext = useContext(AuthContext);

    const { user, getUser } = authContext

    const [image, setImage] = useState('')

    useEffect(() => {
        if (user) setImage(user.profileImage)
    })



    return (
        <div className="grid-2">
            <div id="edit-profile-page">
                <div class="row">
                    <div class="col s12 m6">
                        <div class="card">
                            <div class="card-image">
                                <img src={image ? `${image}`
                                    : `${`https://via.placeholder.com/200?text=Upload+your+profile+image`}`}
                                    alt="profile" style={{ width: '200' }} />
                            </div>
                            <div class="card-content">
                            <span class="card-title">Your profile info</span>
                                <p>First Name: {user.firstName.charAt(0).toUpperCase() + user.firstName.slice(1)} </p>
                                <p>Last Name: {user.lastName.charAt(0).toUpperCase() + user.lastName.slice(1)}</p>
                                <p>Email: {user.email}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <EditProfileForm />
            </div>
        </div>
    )
}

export default Profile
