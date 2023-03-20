import { ItemType } from "../../type/List";
import Item from "../Item";
import "./index.css";

function List(props:{todoList:ItemType[]}) {

  return (
    <div className="List">
      <Item todoItem={props.todoList} />
    </div>
  );
}

export default List;
