import ToDoHeader from "../components/ToDoHeader"
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
    </div>
}

export default ToDo