import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import List from "./components/List";
import { ItemType } from "./type/List";

interface App {
  state: {
    list: ItemType[];
  };
}

class App extends React.Component {
  constructor(props: { list: ItemType }) {
    super(props);
    this.state = {
      list: [{ title: "111", isFinish: false }],
    };
  }

  addListItem = (item: ItemType) => {
    const list = [...this.state.list, item];
    this.setState({ list });
  };

  render(): React.ReactNode {
    const list = this.state.list;
    return (
      <div className="todo-list-container">
        <Header addListItem={this.addListItem} />
        <List todoList={list} />
        <Footer />
      </div>
    );
  }
}

export default App;
