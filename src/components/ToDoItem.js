const ToDoItem = (props) => {

    const handleRemoveClick = () => {

        props.onTodoRemove(props.id)
    }
    return <div style={{ display: "flex" }}>
        <div>{props.title}</div>
        <button onClick={handleRemoveClick}>-</button>
    </div>
}

export default ToDoItem