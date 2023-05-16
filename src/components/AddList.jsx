import React from 'react'
import { Button } from 'react-bootstrap';
import facade from '../apiFacade';
import { NavLink } from 'react-router-dom';

function AddList({ groceryList, user }) {

    const URL = "https://mavle.dk/tomcat/carbon2count/";
    //const URL = "http://localhost:8080/carbon2count/";


    const addListToDB = () => {

        const transformedList = groceryList.map(item => {
            return {
                groceryId: item.idRa500prod, // Assuming item.idRa500prod contains the groceryId
                groceryQuantity: parseFloat(item.inputKg) // Assuming item.inputKg contains the groceryQuantity
            };
        });
        const body = {
            groceryLineDTOs: transformedList
        };

        console.log(body);
        const options = facade.makeOptions("POST", false, body)
        console.log(user.username);

        return fetch(URL + "api/grocerylist/create/" + user.username, options)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`Network response was not ok: ${res.status} ${res.statusText}`);
                }
                return res.json();
            })
            .then(data => {
                console.log(data);
                return data;
            })
            .catch(error => {
                console.error("Error:", error);
            });
    }

    const saveList = () => {
        addListToDB();
    }

    return (
        <div>
            <div className='text-end'>
                <NavLink to="/allgrocerylists">
                <Button onClick={saveList} className="btn btn-success">Afslut og gem</Button>
                </NavLink>
            </div>

        </div>
    )
}


          

export default AddList
