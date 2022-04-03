const ToDoItem = (props) => {
    return <div style={{ display: "flex" }}>
        <div>{props.title}</div>
        <button>-</button>
    </div>
}

export default ToDoItem