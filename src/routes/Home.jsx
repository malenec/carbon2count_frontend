import React from 'react'
import { NavLink } from 'react-router-dom';
import ChartComponent from '../components/ChartComponent';

const Home = ({ user }) => {

  return (
    <div>
      <h3>Home</h3>
      <h1> Welcome to CARBON2COUNT </h1>
      <ChartComponent/>


      {user.username === "" ? (<h4>Log in to see and create grocery lists </h4>) :
        (<>
          <NavLink to="/grocerylist">
            <button>New List</button>
          </NavLink>

        </>)}

    </div>
  );
};

export default Home;

