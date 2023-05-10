import { useEffect, useState } from 'react'
import SearchBar from './SearchBar'
import facade from '../apiFacade'



function Groceries({ user }) {

  const [groceries, setGroceries] = useState([])
  useEffect(() => {
    facade.getAllGroceries(setGroceries)
  }, [])

  return (
    <div>
      <h3 className='mt-5 mx-5 mb-5'> Velkommen til din indkøbsliste {user.username}</h3>

      <SearchBar groceries={groceries}/>


    </div>
  )
}


export default Groceries

