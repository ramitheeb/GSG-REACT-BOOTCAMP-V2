export const Post = (props) => {

    return <div className="post">

        <h1>{props.title}</h1>
        <img src={props.imageSrc} className="image" />
        <p>{props.body}</p>

    </div>
}