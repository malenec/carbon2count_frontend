import {useState} from 'react'

const GroceryLine = ({grocery,index,setDisable, disable}) => {

    const [toggleKgInput, setToggleKgInput] = useState(true);
    const [inputKg, setInputKg] = useState(1)
    


    const handleToggleClick = () => {
        
        setToggleKgInput(!toggleKgInput);
        setDisable(!disable)
       
      };

  return (
    <div key={index}>
    <table className="table">
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

            <td><h5>{inputKg}</h5></td>
            )}
          </td>
          <td><h5>{grocery.name}</h5></td>
          <td><h5>{grocery.dskCategory}</h5></td>

          <td><button onClick={handleToggleClick}  className='mx-2'>+</button><button>-</button></td>
          <td></td>
        </tr>
      </tbody>
    </table>


  </div>

  )
}

export default GroceryLine
