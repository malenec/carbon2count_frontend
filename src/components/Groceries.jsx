import {useState} from 'react'
import SearchBar from './SearchBar'



function Groceries({user}) {
  return (
    <div>
      <h1> Welcome to your list {user.username}</h1>

    <SearchBar/>


    </div>
  )
}


export default Groceries

