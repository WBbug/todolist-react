import "./index.css";

function Item(props:any) {
  return (
    <div className="item-container">
      <input type="checkbox" />
      <div> {props.value}</div>
    </div>
  );
}

export default Item;
