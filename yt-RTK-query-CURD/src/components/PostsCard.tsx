

const PostsCard = ({post}:{post:Post}) => {
  return (
    <div>
        <h1>Post {post.id}</h1>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
    </div>
  )
}

export default PostsCard