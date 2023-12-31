const Post=({post})=>{
    return(
        <article className="Post">
            <h2>{post.title}</h2>
            <p className="postDate">{post.datetime}</p>
            <p className="postBody">
                 {
                 (post.body).length <=25 ?post.body:`${(post.body).slice(0,25)}...`
                 }            </p>
        </article>
    )
}
export default Post;