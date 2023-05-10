import {useState} from 'react'

const GroceryLine = ({grocery,index,setDisable, disable}) => {

    const [toggleKgInput, setToggleKgInput] = useState(true);
    const [inputKg, setInputKg] = useState(1)


    let carbonTotal = inputKg * grocery.totalKgCo2EqKg;
    let agriculture = inputKg * grocery.agriculture;
    let iluc = inputKg * grocery.iLUC;
    let foodProcessing = inputKg * grocery.foodProcessing;
    let packaging = inputKg * grocery.packaging;
    let transport = inputKg * grocery.transport;
    let retail = inputKg * grocery.retail;
    
  

    const handleToggleClick = () => {
        
        setToggleKgInput(!toggleKgInput);
        setDisable(!disable)
       
      };

  return (
    
    <details>
    <summary class="d-flex align-items-center justify-content-between">
    <div key={index}>
    <table className="table" >
      <thead>
        <tr>
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
                onChange={(event) => setInputKg(event.target.value)}
            />
            <button onClick={handleToggleClick}>Godkend</button>
            </div>
            ) : (

            <td><h5>{inputKg} Kg</h5></td>
            )}
          </td>
          <td><h5>{grocery.name}</h5></td>

          
          
            
          <td><h5>{carbonTotal.toFixed(2)} Kg CO<sub>2</sub></h5></td>
          <td><h5>{grocery.dskCategory}</h5></td>

          <td><button onClick={handleToggleClick}  className='mx-2'>+</button><button>-</button></td>
          <td></td>
        </tr>
      </tbody>
    </table>
    </div>
    </summary>
    
          <table>
                <tbody>
                    <tr >
                    <td >Landbrug</td>
                    <td >ILUC</td>
                    <td >Forarbejdning</td>
                    <td >Emballge</td>
                    <td >Transport</td>
                    <td>Retail</td>
                    </tr>
                    <tr >
                    <td >{agriculture.toFixed(2)}</td>
                    <td >{iluc.toFixed(2)}</td> 
                    <td >{foodProcessing.toFixed(2)}</td>
                    <td >{packaging.toFixed(2)}</td>
                    <td >{transport.toFixed(2)}</td>
                    <td >{retail.toFixed(2)}</td>
                    </tr>
                </tbody>
            </table>


  
  </details>
 
  )
}

export default GroceryLine
