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
      list: [],
    };
  }

  addListItem = (item: ItemType) => {
    const list = [...this.state.list, item];
    this.setState({ list });
  };

  render(): React.ReactNode {
    return (
      <div className="todo-list-container">
        <Header addListItem={this.addListItem} />
        <List todoList={this.state.list} />
        <Footer />
      </div>
    );
  }
}

export default App;
