import { useState } from "react"

export const Post = (props) => {

    const [likes, setLikes] = useState(0)
    const handleLikeClick = () => {
        setLikes(likes + 1)
    }


    return <div className="post">

        <h1>{props.title}</h1>
        <img src={props.imageSrc} className="image" />
        <p>{props.body}</p>
        <button onClick={handleLikeClick}>Like</button>
        <span style={{ marginLeft: 20 }}>{likes}</span>

    </div>
}