import { ItemType } from "../../type/List";
import "./index.css";

function Item(props: { item: ItemType }) {
  const item = props.item;
  return (
    <div className="item-container">
      <input type="checkbox" />
      <div> {item.title}</div>
      <button className="button">删除</button>
    </div>
  );
}

export default Item;
