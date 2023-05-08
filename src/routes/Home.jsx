import React from 'react'
import { useLocation } from 'react-router-dom';
import Quote from "../components/Quote"

const Home = ({ user }) => {

  return (
    <div>
      <h3>Home</h3>
      <h1> Welcome to CARBON2COUNT </h1>
      <Quote user={user} />

    </div>
  );
};

export default Home;

