import { Component, ReactNode } from "react";
import { ItemType } from "../../type/List";
import Item from "../Item";
import "./index.css";

export default class List extends Component<{
  todoList: ItemType[];
  changeItem: (item: ItemType) => void;
}> {
  state = {
    list: [],
  };

  render(): ReactNode {
    const list = this.props.todoList;

    return (
      <div className="list">
        {list.map((item, index) => {
          return (
            <Item key={index} item={item} changeItem={this.props.changeItem} />
          );
        })}
      </div>
    );
  }
}
