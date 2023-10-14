import React, {useContext, useEffect} from 'react'
import UserContext from '../context/UserContext'
 
function Profile() {
    const {user} = useContext(UserContext)
    useEffect(()=>{
       console.log(user);
    },[user])

    if (!user) return <div>please login</div>

    return <div>Welcome {user.username}</div>
}

export default Profile