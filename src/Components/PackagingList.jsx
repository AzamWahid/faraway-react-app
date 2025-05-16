import { useState } from 'react';
import ItemList from './ItemList'

function PackagingList({ packlist, setPackList }) {

  const [sortOption, setSortOption] = useState('');


  const clearAllHandler = () => {
    setPackList([])
  }

  const handleSort = (option) => {
    setSortOption(option);

    console.log(option);

    let copyOFActItems = [...packlist];

    switch (option) {
      case "description":
        copyOFActItems = copyOFActItems.sort((a, b) => a.item.localeCompare(b.item));
        break;
      case "packed":
        copyOFActItems = copyOFActItems.sort((a, b) => b.isCompleted - a.isCompleted);
        break;
      // case "inputOrder":
      //   copyOFActItems = packlist;
      //   break;
      default:
        break;

    }

    setPackList(copyOFActItems);
  }

  return (
    <>
      <ItemList packlist={packlist} setPackList={setPackList} />
      <div id='buttons'>
        <select value={sortOption} onChange={(e) => handleSort(e.target.value)}>
          {/* <option value="inputOrder">Sort by Input Order</option> */}
          <option value="description">Sort by Description</option>
          <option value="packed">Sort by Packed</option>
        </select>
        <button onClick={clearAllHandler}>Clear List</button>
      </div>
    </>
  );
}

export default PackagingList;
