import React, { useState } from "react";
import { ItemType } from "../../type/List";
import "./index.css";

function Header(props: { addListItem: (item: ItemType) => void }) {
  const [input, setInputValue] = useState("");

  function handleKey(event: any) {
    if (event.code === "Enter") {
      props.addListItem({ title: input, isFinish: false });
    }
  }

  function handleInputChange(event: any) {
    setInputValue(event.target.value);
  }

  return (
    <input
    className="input"
    placeholder="输入后，请按回车添加"
    value={input}
    onChange={handleInputChange}
    onKeyDown={handleKey}
  ></input>
  );
}

export default Header;
