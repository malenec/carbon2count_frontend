import { useState } from 'react';
import { Button } from 'react-bootstrap';
import GroceryLine from './GroceryLine';
import GroceryListGraph from './GroceryLine';

function SearchBar({ groceries, user }) {
  const [searchInput, setSearchInput] = useState('');
  const [filteredGroceries, setFilteredGroceries] = useState(null);
  const [selectedGrocery, setselectedGrocery] = useState("navn", "kateogri");
  const [groceryList, setGroceryList] = useState([]);
  const [disable, setDisable] = useState(false);
  const [theList, setTheList] = useState([]);

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
                disabled={disable}
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
                  <div>
                    <GroceryListGraph />
                  </div>
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
                        setDisable(!disable)
                      }}
                    >
                      {grocery.name}
                      <p style={{ margin: '0', fontSize: '12px' }}>{grocery.dskCategory}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>


          </div>
        </div>
        <div className='col-8'>
          {groceryList.map((grocery, index) => (
            <GroceryLine grocery={grocery} groceryList={groceryList} setGroceryList={setGroceryList} index={index} setDisable={setDisable} disable={disable} theList={theList} setTheList={setTheList}
            />
          ))}


          <AddList thelist={theList} user={user} />
        </div>

      </div>
    </div >


  );
}

export default SearchBar;
