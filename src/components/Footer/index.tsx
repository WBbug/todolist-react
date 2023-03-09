import React from "react";
import "./index.css";

function Footer() {
  return (
    <div className="Footer">
      <input type="checkbox" />
      <div className="finish-percent">已完成 1/2</div>
      <button className="clear-handle">清除已完成任务</button>
    </div>
  );
}

export default Footer;
