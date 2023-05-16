import React from 'react'
import ShowAllLists from '../components/ShowAllLists';

const AllGroceryLists = ({ user }) => {

  return (
    <div>

<h3 className='mt-5 mx-5 mb-5'> Oversigt over dine indkøbslister</h3>

<ShowAllLists user={user}/>

    </div>
  );
};

export default AllGroceryLists;