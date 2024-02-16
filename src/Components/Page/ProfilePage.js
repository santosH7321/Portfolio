import React from 'react';
import { Link } from 'react-router-dom';

function ProfilePage() {
    const profiles = [1,2,3,4,5,6,7]
  return (
    <div>
        {profiles.map((profile) =>{
            <Link key={profile} to={`/profile/${profile}`} >
                profile {profile}
            </Link>
        })}
    </div>
  )
}

export default ProfilePage
