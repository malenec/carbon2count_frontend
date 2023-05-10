import { useState } from 'react';
import { Button } from 'react-bootstrap';

function SearchBar({groceries}) {
  const [searchInput, setSearchInput] = useState('');
  const [filteredGroceries, setFilteredGroceries] = useState(null);
  const [selectedGrocery, setselectedGrocery] = useState("navn", "kateogri");
  const [groceryList, setGroceryList] = useState([]);

  //const groceries = [{ name: 'Agurk, rå', foodcategory: 'Grøntsager' }, { name: 'Drueagurk (sylteagurk), rå', foodcategory: 'Grøntsager' }, { name: 'Agurk, syltet', foodcategory: 'Frugt/grøntsagsprodukter' }, { name: 'Tomat, uspec., rå', foodcategory: 'Grøntsager' }, { name: 'Tomat, soltørret', foodcategory: 'Grøntsager' }, { name: 'Tomatsuppe, spiseklar', foodcategory: 'Tilberedte/konserverede fødevarer', }, { name: 'Tun i tomat, konserves', foodcategory: 'Fisk og skaldyr' }, { name: 'Soltørrede tomater', foodcategory: 'Frugt/grøntsagsprodukter' },];

  const handleChange = (e) => {
    e.preventDefault();
    const searchValue = e.target.value;
    const filtered = groceries.filter((grocery) =>
      grocery.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredGroceries(filtered);
    setSearchInput(searchValue);
  };


  return (
    <div className='container'>
      <div className='row'>
        <div className='col-4'>
          <h5> Søg efter fødevarer </h5>
          <div className='my-4'>
            <div className='mb-4' style={{ position: 'relative' }}>
              <input
                type="text"
                placeholder="fx. Tomat"
                onChange={handleChange}
                value={searchInput}
                style={{ maxWidth: '205px', minWidth: '205px', minHeight: '25px', padding: '5px' }}
              />
              {filteredGroceries && (
                <div
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: '0',
                    width: '100%',
                    overflowY: 'scroll',
                    border: '1px solid black',
                    borderTop: 'none',
                    zIndex: '1',
                    backgroundColor: 'white',
                    maxWidth: '205px',
                    maxHeight: '200px',
                    minWidth: '205px'
                  }}
                >
                  {filteredGroceries.map((grocery, index) => (
                    <div
                      key={index}
                      style={{
                        padding: '5px', cursor: 'pointer', background: index % 2 === 0 ? '#f7f7f7' : '#ffffff'
                      }}
                      onClick={() => {
                        setSearchInput(grocery.name);
                        setselectedGrocery(grocery);
                        setGroceryList([...groceryList, grocery]);
                        setFilteredGroceries(null);
                      }}
                    >
                      {grocery.name}
                      <p style={{ margin: '0', fontSize: '12px' }}>{grocery.foodcategory}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>


          </div>
        </div>
        <div className='col-8'>
          {groceryList.map((grocery, index) => (
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
                      <input
                        type="number"
                        placeholder="kg"
                        style={{ minHeight: '25px', padding: '5px' }}
                      />
                    </td>
                    <td><h5>{grocery.name}</h5></td>
                    <td><h5>{grocery.foodcategory}</h5></td>

                    <td><button className='mx-2'>+</button><button>-</button></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>


            </div>

          ))}


        </div>

      </div>
    </div >


  );
}

export default SearchBar;
