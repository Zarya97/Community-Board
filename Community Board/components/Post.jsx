import './Post.css'

const Post = (props) => {

    return (
        <div className="Post">
            <img src={props.image}/>
            <p>{props.eventName}</p>
            <p>{props.eventDate}</p>
            <p>{props.eventTime}</p>
            <p>{props.eventLocation}</p>
            <a href={props.link} target="_blank" rel="noopener noreferrer">
                <button>Buy Tickets</button>
            </a>
        </div>
    )
}

export default Post;