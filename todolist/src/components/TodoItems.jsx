import React from "react";


function TodoItems(props) {

    const imgLink = "https://cdn-icons-png.flaticon.com/512/1214/1214428.png"

    const [isDone, setDone] = React.useState(false)

    function handleClick() {
        setDone(!isDone)
    }

    return (
        <div style={{ textDecoration: isDone ? "line-through" : "none" }}>
            <li onClick={handleClick}>{props.text} <img onClick={() => { props.onChecked(props.id) }} src={imgLink} alt="default" srcset="" /></li>
        </div>
    )
}

export default TodoItems;