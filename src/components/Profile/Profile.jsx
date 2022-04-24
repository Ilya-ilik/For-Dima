import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import './Profile.css'

const Profile = () => {
    return  <div className='content'>
    <div>
    <img src='https://youimg1.tripcdn.com/target/100r1f000001gor3c9565_C_750_420.jpg_.webp?proc=source%2Ftrip'></img>
    </div>

    <div> 
      <MyPosts/>  
    </div>
    

    </div>
} 

export default Profile;