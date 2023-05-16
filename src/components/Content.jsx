import React from 'react'
import { Navigate, Routes, Route } from 'react-router-dom'
import Home from "../routes/Home";
import About from "../routes/About";
import GroceryList from "../routes/GroceryList";
import AllGroceryLists from "../routes/AllGroceryLists";
import Admin from "../routes/Admin";

function Content({ user, loggedIn }) {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home user={user} />} />
                <Route path="/about" element={<About user={user} />} />


                {
        loggedIn ?
            [ <>
                // add as many as you'd like here
                <Route path="/addgrocerylist" element={<GroceryList user={user} />} />
                <Route path="/allgrocerylists" element={<AllGroceryLists user={user} />} />
                <Route path='/admin' element={<Admin user={user} />} />
            
                </>]
            :
            <>null</>
    }

    <Route path={"*"} element={ <Navigate replace to={ "/" }/> }/>

                </Routes>
        </div>
    )
}

export default Content
