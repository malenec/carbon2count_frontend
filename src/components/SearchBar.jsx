import {useState} from 'react'

function SearchBar() {
    const [searchInput, setSearchInput] = useState("");

    const groceries = [

        { name: "Agurk, rå", foodcategory: "Grøntsager" },
        { name: "Drueagurk (sylteagurk), rå", foodcategory: "Grøntsager" },
        { name: "Agurk, syltet", foodcategory: "Frugt/grøntsagsprodukter" },
        { name: "Tomat, uspec., rå", foodcategory: "Grøntsager" },
        { name: "Tomat, soltørret", foodcategory: "Grøntsager" },
        { name: "Tomatsuppe, spiseklar", foodcategory: "Tilberedte/konserverede fødevarer" },
        { name: "Tun i tomat, konserves", foodcategory: "Fisk og skaldyr" },
        { name: "Soltørrede tomater", foodcategory: "Frugt/grøntsagsprodukter" }
      ];

      const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
      };
      
      if (searchInput.length > 0) {
        groceries.filter((grocery) => {
          return grocery.name.match(searchInput);
      });
      }

  return (
    <div>

        <h4> Search for groceries here </h4>
      <input
        type="text"
        placeholder="Search here"
        onChange={handleChange}
        value={searchInput} />


<table>
  <tr>
    <th>Grocery</th>
    <th>Food Category</th>
  </tr>


  {groceries.map((grocery, *index*) => {

<div>
  <tr>
    <td>{grocery.name}</td>
    <td>{grocery.foodcategory}</td>
  </tr>
</div>

})}

</table>

    </div>

    )

}



export default SearchBar

