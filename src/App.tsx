import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import List from "./components/List";

function App() {
  return (
    <div className="todo-list-container">
      <Header />
      <List />
      <Footer />
    </div>
  );
}

export default App;
