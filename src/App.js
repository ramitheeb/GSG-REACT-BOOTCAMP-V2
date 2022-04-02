
import { WelcomeMessage } from "./WelcomeMessage"
import { Post } from "./Post"
import "./styles.css"
import { Counter } from "./Counter"
import { useEffect, useState } from "react"




export const App = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => {
                setPosts(json)
            });
    }, [])

    return <div className="container">

        {posts.map(post => <Post title={post.title} imageSrc={post.imageSrc} body={post.body} />)}
    </div>

}

