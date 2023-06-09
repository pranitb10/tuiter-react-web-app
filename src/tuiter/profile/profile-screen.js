import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { profileThunk, logoutThunk, updateUserThunk }
  from "../services/auth-thunks";
function ProfileScreen() {
 const { currentUser } = useSelector((state) => state.user);
 var [ profile, setProfile ] = useState(currentUser);
 const dispatch = useDispatch();
 const navigate = useNavigate();
 const save = async () => { 
    await dispatch(updateUserThunk(profile)); 
};

useEffect(  () => {
    dispatch(profileThunk())

}, []);
console.log("profile" , profile)
 return (
    <div>
     <h1>Profile Screen</h1>
     {profile && (<div>
       <div>
        <label style={{marginRight: 10, marginBottom: 10}}>First Name</label>
        <input type="text" value={profile.firstName}
         onChange={(event) => {
          const newProfile = {
           ...profile, firstName: event.target.value,
          };
          setProfile(newProfile);
         }}/>
       </div>
       <div>
        <label style={{marginRight: 10, marginBottom: 10}}>Last Name</label>
        <input type="text" value={profile.lastName}
         onChange={(event) => {
          const newProfile = {
           ...profile, lastName: event.target.value,
          };
          setProfile(newProfile);
         }}/>
       </div></div>
     )}
     <button style={{marginRight: 10, marginTop: 10}}
      onClick={() => {
        dispatch(logoutThunk());
        navigate("/tuiter/login");
      }}>                   Logout</button>
     <button style={{marginLeft: 10, marginTop: 10}} onClick={save}>Save  </button>
    </div> );
}

export default ProfileScreen;