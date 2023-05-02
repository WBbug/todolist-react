import React from "react";
import "./index.css";
import { ItemType } from "../../type/List";

function Footer(props: {
  todoList: ItemType[];
  clearListItem: () => void;
  setFinish: (isFinish: boolean) => void;
}) {
  const sumItem = props.todoList.length;

  const finishedItem = props.todoList.filter((item) => {
    return item.isFinish;
  }).length;

  function setAllFinsh(event: React.MouseEvent<HTMLInputElement>) {
    props.setFinish((event.currentTarget as HTMLInputElement).checked);
  }

  function finishItem() {
    props.clearListItem();
  }

  return (
    <div className="Footer">
      <input type="checkbox" onClick={setAllFinsh} />
      <div className="finish-percent">
        已完成 {finishedItem}/{sumItem}
      </div>
      <button className="clear-handle" onClick={finishItem}>
        清除已完成任务
      </button>
    </div>
  );
}

export default Footer;
