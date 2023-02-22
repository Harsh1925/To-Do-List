import React from "react";

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
    })
  }


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={gettingValue} type="text" />
        <button onClick={updatingItems}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map(item => <li>{item}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
