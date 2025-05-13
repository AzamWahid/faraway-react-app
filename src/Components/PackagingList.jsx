import ItemList from './ItemList'

function PackagingList() {
  const itemsList = [
    { item: 'Luggage', quantity: 2, isCompleted: false },
    { item: 'Ehraam', quantity: 2, isCompleted: false },
    { item: 'Slippers', quantity: 1, isCompleted: true },
    { item: 'Hand Carry', quantity: 1, isCompleted: true },
    { item: 'Passport', quantity: 1, isCompleted: false },
    { item: 'Visa', quantity: 1, isCompleted: false },
  ];

  return (
    <>
      <ItemList itemsList={itemsList} />
      <div id='buttons'>
        <select>
          <option value="">Sort by Input Order</option>
          <option value="">Sort by Description</option>
          <option value="">Sort by Packed</option>
        </select>
        <button>Clear List</button>
      </div>
    </>
  );
}

export default PackagingList;
