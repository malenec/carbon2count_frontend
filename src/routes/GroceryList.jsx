import React from 'react'
import Groceries from '../components/Groceries';

const GroceryList = ({ user }) => {

  return (
    <div>
      
      <Groceries user={user} />

    </div>
  );
};

export default GroceryList;