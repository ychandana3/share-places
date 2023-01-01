import React from 'react'
import UserItem from './UserItem'
import './UsersList.css'
const UsersList = (props) => {
  return (
    <div className='center'>
        {
            props.items.map((item) =>(
                <UserItem key = {item.id} id = {item.id} name = {item.name} image = {item.img} placeCnt = {item.places}/>
            ))          
        }
    </div>
  )
}

export default UsersList;