import React from 'react'
import { NavLink } from 'react-router-dom';
import yourImage from '../Images/yourImage.png';

const Home = ({ user }) => {
  

  return (
    <div>
      {/* <h3>Home</h3> */}
      <div className='text-center mt-5'>
      <h1> Velkommen til carbon2count </h1>

      {user.username === "" ? (<h4>Log ind for at se og oprette indkøbslister og få beregnet CO2 udledning </h4>) :
        (<>
          {/* <NavLink to="/addgrocerylist">
            <button>New List</button>
          </NavLink> */}

        </>)}
        <img src={yourImage} alt="Your Image Description" style={{minWidth: '500px'}} />
        </div>
    </div>
  );
};

export default Home;

