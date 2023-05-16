import { useEffect, useState } from 'react';


const ListGraph = ({groceryList}) => {
  const [categories, setCategories] = useState([new Map()]);
  // console.table(groceryList);

  // useEffect(() => {

    

  //   const updatedCategories = new Map(categories);
  
  //   groceryList.map(grocery => {
  //     // console.table(groceryList);
  //     console.log(grocery.inputKg);
  //     if (updatedCategories.has(grocery.dskCategory)) {
  //       updatedCategories.set(
  //         grocery.dskCategory,
  //         updatedCategories.get(grocery.dskCategory) +
  //           grocery.totalKgCo2EqKg * parseFloat(grocery.inputKg)
  //       );
  //     } else {
  //       updatedCategories.set(grocery.dskCategory, grocery.totalKgCo2EqKg * parseFloat(grocery.inputKg));
  //     }
  //   });
  
  //   setCategories(updatedCategories);
  //   console.log(updatedCategories);
  // }, [groceryList]);


  useEffect(() => {
    const updatedCategories = new Map();

    groceryList.forEach((grocery) => {
      const categoryValue =
        (updatedCategories.get(grocery.dskCategory) || 0) +
        grocery.totalKgCo2EqKg * grocery.inputKg;

      updatedCategories.set(grocery.dskCategory, categoryValue);
    });

    setCategories(updatedCategories);
    console.log(updatedCategories);
  }, [groceryList]);

  const keys = Array.from(categories.keys());

  return (
    <div>
      {/* https://quickchart.io/chart?c={type:'bar',data:{labels:["Q1","Q2","Q3","Q4"], datasets:[{label:'Users',data:[50,60,70,180]},{label:'Revenue',data:[100,200,300,400]}]}} */}
      <img src= {`https://quickchart.io/chart?c={type:'bar',data:{labels:[${keys.map((key) => `"${key}"`).join(",")}], datasets:[{label:'Carbon pr kg',data:[${Array.from(categories.values())}]}]}}`}/>
    </div>
  )
}

export default ListGraph

