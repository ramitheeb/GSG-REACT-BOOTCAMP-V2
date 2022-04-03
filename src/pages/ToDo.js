import { useState } from "react"
import ToDoFooter from "../components/ToDoFooter"
import ToDoHeader from "../components/ToDoHeader"
import ToDoItem from "../components/ToDoItem"


const ToDo = () => {
    const [toDos, setToDos] = useState([])


    function addTodo(toDo) {
        setToDos([toDo, ...toDos])
    }

    const onTodoRemove = (id) => {
        const filteredToDo = toDos.filter(item => item.id !== id)
        setToDos(filteredToDo)
    }



    return <div>
        <h1>To Do App </h1>
        <ToDoHeader addElement={addTodo} />
        {toDos.map(toDo => <ToDoItem title={toDo.title} id={toDo.id} onTodoRemove={onTodoRemove} />)}
        <ToDoFooter />
    </div>

}

export default ToDo