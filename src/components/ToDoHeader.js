import { useState } from "react"


const ToDoHeader = (props) => {

    const [title, setTitle] = useState("")
    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleAddToDo = () => {
        if (title.length == 0) return
        const newToDo = {
            title: title,
            id: Math.random(),
            date: new Date()
        }
        props.onToDoAdd(newToDo)
        setTitle("")

    }

    return <div>
        <input type="text" placeholder="title" value={title} onChange={handleTitleChange} />
        <button onClick={handleAddToDo} > +</button>

    </div>
}

export default ToDoHeader
