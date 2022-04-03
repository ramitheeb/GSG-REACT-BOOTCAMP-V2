import { useState } from "react"
import ToDoFooter from "../components/ToDoFooter"
import ToDoHeader from "../components/ToDoHeader"
import ToDoItem from "../components/ToDoItem"


const ToDo = () => {
    const [toDos, setToDos] = useState([])

    const onToDoAdd = (toDo) => {
        setToDos([toDo, ...toDos])
    }

    function addTodo(toDo){
        setToDos([toDo, ...toDos])
    }


    return <div>
        <h1>To Do App </h1>
        <ToDoHeader addElement={addTodo} />
        {toDos.map(toDo => <ToDoItem title={toDo.title} />)}
        <ToDoFooter />
    </div>

}

export default ToDo