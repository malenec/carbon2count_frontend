import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from "../routes/Home";
import About from "../routes/About";
import GroceryList from "../routes/GroceryList";
import AllGroceryLists from "../routes/AllGroceryLists";

function Content({ user }) {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home user={user} />} />
                <Route path="/about" element={<About user={user} />} />
                <Route path="/addgrocerylist" element={<GroceryList user={user} />} />
                <Route path="/allgrocerylists" element={<AllGroceryLists user={user} />} />
            </Routes>
        </div>
    )
}

export default Content
