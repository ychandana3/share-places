import React from 'react'
import UsersList from '../components/UsersList'

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'aish',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsynwv-5qtogtOwJbIjaPFJUmHpzhxgqIAug&usqp=CAU',
      places: 5
    },
    {
      id: 'u1',
      name: 'aish',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsynwv-5qtogtOwJbIjaPFJUmHpzhxgqIAug&usqp=CAU',
      places: 5
    },
    {
      id: 'u1',
      name: 'aish',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsynwv-5qtogtOwJbIjaPFJUmHpzhxgqIAug&usqp=CAU',
      places: 5
    }
  ]
  return (
    <div>
      <UsersList items = {USERS}/>
    </div>
  )
}

export default Users