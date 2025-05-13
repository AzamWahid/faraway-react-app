import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare, faSquareCheck, faXmark } from '@fortawesome/free-solid-svg-icons'

function ItemList({ itemsList }) {
  return (
    <div className="items-wrapper">
      {itemsList.map((item, idx) => (
        <div className="item-card" key={idx}>
          <FontAwesomeIcon icon={item.isCompleted ? faSquareCheck : faSquare} />
          <p>{item.quantity} × {item.item}</p>
          <FontAwesomeIcon icon={faXmark} style={{ color: '#ff6347', cursor: 'pointer' }} />
        </div>
      ))}
    </div>
  );
}

export default ItemList;
