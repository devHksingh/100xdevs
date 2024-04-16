import { useSelector } from "react-redux";
import {selectAllPosts} from "./postsSlice"

const PostsList = () => {
    const posts = useSelector(selectAllPosts)

    const renderPosts = posts.map(post =>(
        <article key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content.substring(0,100)}</p>

        </article>
    ))
  return (
    <section>
        <h1>Posts</h1>
        {renderPosts}
    </section>
  )
}

export default PostsList