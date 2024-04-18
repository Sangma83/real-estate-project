import { useState } from 'react';


const Profile = () => {
    const [user, setUser] = useState(null);
  

   

   


    return (
        <div>
         
            {user && <div>
                <h3>User: {user.displayName}</h3>
                <p>Email: {user.email}</p>
                <img src={user.photoURL} alt="" />
            </div>}
        </div>
    );
};

export default Profile;