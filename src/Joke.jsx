export default function Joke(props){

   const likeHandler = () =>{
        props.onLike(props.id)
   }

   const dislikeHandler = () => {
        props.onDislike(props.id)
   }

   const deleteHandler = () =>{
        props.onDelete(props.id)
   }

    return (
        <>
            <div className="jokes">
                <p>{props.joke}</p>
                <p>Likes : {props.likes}</p>
                <div className="buttons">
                    <button onClick={likeHandler}>👍🏻</button>
                    <button onClick={dislikeHandler}>👎🏻</button>
                    <button onClick={deleteHandler}>🗑️</button>
                </div>
            </div>
        </>
    )
}