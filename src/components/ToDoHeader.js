import { useState } from "react"
import Test from "./Test"


const ToDoHeader = () => {

    const [title, setTitle] = useState("")
    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }

    return <div>
        <input type="text" placeholder="title" value={title} onChange={handleTitleChange} />
        <button> +</button>

    </div>
}

export default ToDoHeader
