import ToDoFooter from "../components/ToDoFooter"
import ToDoHeader from "../components/ToDoHeader"
import ToDoItem from "../components/ToDoItem"
let toDos = [
    {
        title: "bbla aldflsa fsad ",
        id: 1,
        date: new Date(),

    },
    {
        title: "bbla aldflsa fsad 2 ",
        id: 2,
        date: new Date(),

    },
    {
        title: "bbla aldflsa fsad 3 ",
        id: 3,
        date: new Date(),

    }
]



const ToDo = () => {
    return <div>
        <h1>To Do App </h1>
        <ToDoHeader />
        {toDos.map(toDo => <ToDoItem title={toDo.title} />)}
        <ToDoFooter />
    </div>

}

export default ToDo