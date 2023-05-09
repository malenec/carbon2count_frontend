import { useState } from 'react'
import SearchBar from './SearchBar'



function Groceries({ user }) {
  return (
    <div>
      <h3 className='mt-5 mx-5 mb-5'> Velkommen til din indkøbsliste {user.username}</h3>

      <SearchBar />


    </div>
  )
}


export default Groceries

