import { useState } from 'react'
import { Table, Button } from 'react-bootstrap';

const GroceryLine = ({ grocery, groceryList, setGroceryList, index, setDisable, disable }) => {

  const [toggleKgInput, setToggleKgInput] = useState(true);
  const [inputKg, setInputKg] = useState(1)
  const pencilIcon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
  </svg>;
  const trashIcon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
  </svg>;

  const checkIcon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle" viewBox="0 0 16 16">
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
    <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
  </svg>



  let carbonTotal = inputKg * grocery.totalKgCo2EqKg;
  let agriculture = inputKg * grocery.agriculture;
  let iluc = inputKg * grocery.iLUC;
  let foodProcessing = inputKg * grocery.foodProcessing;
  let packaging = inputKg * grocery.packaging;
  let transport = inputKg * grocery.transport;
  let retail = inputKg * grocery.retail;


  const handleAddClick = () => {
    const newGrocery = {
      ...grocery,
      inputKg: parseFloat(inputKg),
    };

    const updatedGroceryList = [...groceryList];
    updatedGroceryList[index] = newGrocery;
    setGroceryList(updatedGroceryList);

  }
  const handleToggleClick = (grocery) => {
    setToggleKgInput(!toggleKgInput);
    setDisable(!disable)
    handleAddClick()
    console.log(groceryList)
  };

  const deleteGrocery = (index) => {
    const newGroceryList = [...groceryList];
    newGroceryList.splice(index, 1);
    setGroceryList(newGroceryList);
    if (disable) {
      setDisable(false)
    }
  }

  return (

    <details>
      <summary className="d-flex align-items-center justify-content-between">

        <table className="table" >
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row"> {index + 1}</th>
              <td>
                {toggleKgInput ? (
                  <div>
                    <input
                      type="number"
                      placeholder="kg"
                      style={{ minHeight: '25px', padding: '5px' }}
                      value={inputKg}
                      onChange={(e) => setInputKg(e.target.value)}
                    />
                    <Button className='btn btn-success mx-2' onClick={handleToggleClick}>{checkIcon}</Button>
                  </div>
                ) : (
                  <h5>{inputKg} Kg</h5>
                )}
              </td>
              <td><p>{grocery.name}</p></td>



              <td><p>({grocery.dskCategory})</p></td>
              <td><p>{carbonTotal.toFixed(2)} Kg CO<sub>2</sub></p></td>


              <td>
                <Button onClick={handleToggleClick} className="mx-2">
                  {pencilIcon}
                </Button>
                <Button onClick={deleteGrocery}>
                  {trashIcon}
                </Button>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </summary>

      <Table bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>ILUC</th>
            <th>Forarbejdning</th>
            <th>Emballage</th>
            <th>Transport</th>
            <th>Retail</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td >{agriculture.toFixed(2)}</td>
            <td >{iluc.toFixed(2)}</td>
            <td >{foodProcessing.toFixed(2)}</td>
            <td >{packaging.toFixed(2)}</td>
            <td >{transport.toFixed(2)}</td>
            <td >{retail.toFixed(2)}</td>
          </tr>
        </tbody>
      </Table>



    </details>

  )
}

export default GroceryLine
