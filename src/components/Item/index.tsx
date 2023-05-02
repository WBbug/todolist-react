import { ItemType } from "../../type/List";
import "./index.css";

function Item(props: { item: ItemType; changeItem: (item: ItemType) => void }) {
  const item = props.item;

  function changeStatus() {
    props.changeItem(props.item);
  }

  return (
    <div className="item-container">
      <input
        type="checkbox"
        checked={props.item.isFinish}
        onClick={changeStatus}
      />
      <div> {item.title}</div>
      <button className="button">删除</button>
    </div>
  );
}

export default Item;
