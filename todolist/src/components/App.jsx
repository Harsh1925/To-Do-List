import React from "react";
import TodoItems from "./TodoItems";

function App() {

  const [inputText, setText] = React.useState("")
  const [items, setItems] = React.useState([]);

  function gettingValue(event) {
    const newItem = event.target.value;
    setText(newItem);
  }

  function updatingItems() {
    setItems((prevItems) => {
      return [...prevItems, inputText]
    });
    setText("");
  }

  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id
      })
    });
  }


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={gettingValue} type="text" value={inputText} />
        <button onClick={updatingItems}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item, index) =>
            <TodoItems key={index} id={index} text={item} onChecked={deleteItem} />)}
        </ul>
      </div>
    </div>
  );
}

export default App;
