import React from 'react'
import Nav from '../Nav';
import "./ProfileScreen.css";
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth } from '../app/firebase';

function ProfileScreen() {
  const user = useSelector(selectUser);

  return (
    <div className="profileScreen">
      <Nav/>
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img src="https://imgs.search.brave.com/Y3VYcZExZtR89T9vI3dKXCRRVZ5bJNbt7ZMXEaa2jJo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvbmV0/ZmxpeC1wcm9maWxl/LXBpY3R1cmVzLTEw/MDAteC0xMDAwLTg4/d2tkbWpyb3Jja2Vr/aGEuanBn" alt="" />

          <div className="profileScreen__details">
            <h2>{user.email}</h2>
             <div className="profileScreen__plans">
              <h3>plans</h3>
              <button 
              onClick={() => auth.signOut()}
              className="profileScreen__signOut">Sign Out</button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
