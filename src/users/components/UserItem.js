import React from 'react'
import Avatar from '../../shared/components/UIElements/Avatar'
import './UserItem.css'
const UserItem = (props) => {
  return (
    <div className='space'>

    <div className = "user-item">
        <img src = {props.image}></img>
        
        <div className='user-item-content'>

        <h2>{props.name}</h2>
        <h3>{props.placeCnt}</h3>
        </div>
    </div>
    </div>
  )
}

export default UserItem