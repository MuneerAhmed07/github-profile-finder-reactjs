import React from 'react'

const ProfileCard = ({user}) => {
  return (
    <>
        <div className="profile-card">
            <img src={user.avatar_url} alt={`${user.login}'s avatar`} />
            <h2>{user.name || "No Name Provided"}</h2>
            <p>@{user.login}</p>
            <p>Followers: {user.followers}</p>
            <p>Following: {user.following}</p>
            <p>Public Repos: {user.public_repos}</p>
            <a href={user.html_url} target='_blank' rel='noopener noreferrer'>View Profile</a>
        </div> 
    </>
  )
}

export default ProfileCard
