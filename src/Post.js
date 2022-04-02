import { useState, useEffect } from "react"

export const Post = (props) => {

    const [likes, setLikes] = useState(0)
    const handleLikeClick = () => {
        setLikes(likes + 1)
    }



    return <div className="post">

        <h1>{props.title}</h1>
        <img src="https://images.pexels.com/photos/11341064/pexels-photo-11341064.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" className="image" />
        <p>{props.body}</p>
        <button onClick={handleLikeClick}>Like</button>
        <span style={{ marginLeft: 20 }}>{likes}</span>
        {/* <input value={comments} onChange={(e) => setComments(e.target.value)} /> */}

    </div>
}