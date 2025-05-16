import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faL, faSquare, faSquareCheck, faXmark } from '@fortawesome/free-solid-svg-icons'

function ItemList({ packlist, setPackList }) {

  function completeTickHandler(idx) {
    const copyOFActItems = [...packlist];

    copyOFActItems[idx].isCompleted = copyOFActItems[idx].isCompleted ? false : true;
    // copyOFActItems[idx].isCompleted = !copyOFActItems[idx].isCompleted;


    setPackList(copyOFActItems);
  }

  function deleteItemHandler(idx) {

    let copyOFActItems = [...packlist];

    copyOFActItems.splice(idx, 1)
    // copyOFActItems = copyOFActItems.filter((item,index) => index !=idx)

    setPackList(copyOFActItems);
  }

return (
  <div className="items-wrapper">
    {packlist.map((item, idx) => (
      <div className="item-card" key={idx}>
        <FontAwesomeIcon onClick={() => completeTickHandler(idx)} icon={item.isCompleted ? faSquareCheck : faSquare} />
        <p style={{ textDecoration: item.isCompleted ? 'line-through' : 'none' }}>{item.quantity} × {item.item}</p>
        <FontAwesomeIcon onClick={() => deleteItemHandler(idx)} icon={faXmark} style={{ color: '#ff6347', cursor: 'pointer' }} />
      </div>
    ))}
  </div>
);
}

export default ItemList;
