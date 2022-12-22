import { useState } from "react"


const ToDoHeader = (props) => {
const [title, setTitle] = useState("")
    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }

    function handleAddToDo(){
        if (title.length ==0) return;
        let todo = {
            title: title,
            id: Math.random(),
            date:new Date()
        }
        props.addElement(todo)
        setTitle("")
    }


    return <div>
        <input type="text" placeholder="title" value={title} onChange={handleTitleChange} />
        <button onClick={handleAddToDo} > +</button>

    </div>
}

export default ToDoHeader
