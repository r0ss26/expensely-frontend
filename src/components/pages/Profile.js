import React, {useContext, useEffect} from 'react'
import './pageStyle.css'
import EditProfileForm from '../Forms/EditProfileForm'
import AuthContext from '../../context/auth/authContext'

const Profile = () => {

    // const authContext = useContext(AuthContext);

    // const { user, getUser} = authContext

    // useEffect(() => {
    //     getUser()
    // })
  
    

    return (
        <div className='container-wrapper'>
            <p>This is profile page</p>
            <EditProfileForm />
        </div>
    )
}

export default Profile
