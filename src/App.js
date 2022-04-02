
import { WelcomeMessage } from "./WelcomeMessage"
import { Post } from "./Post"

import "./styles.css"
import { Counter } from "./Counter"
const posts = [
    {
        title: "HELOOOOOOOOOOOOOOOOO",
        imageSrc: "https://images.pexels.com/photos/11341064/pexels-photo-11341064.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.        "
    },
    {
        title: "title 1",
        imageSrc: "https://images.pexels.com/photos/11341064/pexels-photo-11341064.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.        "
    },
    {
        title: "title 2",
        imageSrc: "https://images.pexels.com/photos/11341064/pexels-photo-11341064.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.        "
    }, {
        title: "title 3",
        imageSrc: "https://images.pexels.com/photos/11341064/pexels-photo-11341064.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.        "
    },
]


export const App = () => {
    return <div className="container">

        {posts.map(post => <Post title={post.title} imageSrc={post.imageSrc} body={post.body} />)}
    </div>

}

