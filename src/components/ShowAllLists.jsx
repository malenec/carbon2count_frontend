import React from "react";
import { Container, Table, Button } from "react-bootstrap";
import { useState, useEffect } from "react";

function ShowAllLists({ user }) {
  const [groceryList, setGroceryList] = useState([]);
  const URL = "https://mavle.dk/tomcat/carbon2count/";
  
  const [chosenList, setChosenList] = useState([]);

  const arrow = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-list-columns-reverse"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M0 .5A.5.5 0 0 1 .5 0h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 0 .5Zm4 0a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10A.5.5 0 0 1 4 .5Zm-4 2A.5.5 0 0 1 .5 2h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm4 0a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5Zm-4 2A.5.5 0 0 1 .5 4h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm4 0a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5Zm-4 2A.5.5 0 0 1 .5 6h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm4 0a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5Zm-4 2A.5.5 0 0 1 .5 8h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm4 0a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5Zm-4 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm4 0a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1-.5-.5Zm-4 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm4 0a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5Zm-4 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm4 0a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5Z"
      />
    </svg>
  );

  useEffect(() => {
    getAllGroceries(setGroceryList);
  }, []);

  const showList = (groceryId) => {
    console.log("show list " + groceryId);

    getAllGroceries(setGroceryList);
  };

  const getAllGroceries = (setGroceryList) => {
    fetch(URL + "/api/grocerylist/all/" + user.username)
      .then((res) => res.json())
      .then((data) => {
        setGroceryList(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Container>
        <div className="row">
          <div className="col">
            <Table bordered hover>
              <tbody>
                {groceryList.map((groceryList, index) => (
                  <tr key={index}>
                    <td>
                      <div className="mx-2">
                        {groceryList.created}{" "}
                        <Button
                          className="btn btn-sm px-5 mx-4 my-2"
                          onClick={() =>
                            showList(
                              groceryList.groceryLineDTOs[0].groceryListId
                            )
                          }
                          id={groceryList.groceryLineDTOs[0].groceryListId}
                        >
                          {arrow}
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
          <div className="col-8">
            
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ShowAllLists;
