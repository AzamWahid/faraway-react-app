import { useState } from "react";

function Form({ packList, setPackList }) {

  const [itemDesc, setItemDesc] = useState('');
  const [itemQnty, setitemQnty] = useState(0)

  const newItem = {
    item : itemDesc,
    quantity : itemQnty,
    isCompleted: false
  };
  function addPackListHandler() {
    console.log('Hello')
     console.log(packList);
    let newPackList = [...packList];
    newPackList.push(newItem);
    //  console.log(newPackList);

    setPackList(newPackList);
    setItemDesc(''); // Clear input after adding
    setitemQnty(1); // Optionally reset quantity

  }


  return (
    <div className="form-container">
      <select value={itemQnty} onChange={(e) => setitemQnty(e.target.value)}>
        {[...Array(10)].map((_, i) => (
          <option key={i} value={i + 1}>{i + 1}</option>
        ))}
      </select>
      <input type="text" placeholder='What do you need?' value={itemDesc} onChange={(e) => setItemDesc(e.target.value)} />
      <button onClick={addPackListHandler}>Add</button>
    </div>
  );
}

export default Form;
