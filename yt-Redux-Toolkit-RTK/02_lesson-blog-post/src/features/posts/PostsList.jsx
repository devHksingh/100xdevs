import { useSelector } from "react-redux";
import {selectAllPosts} from "./postsSlice"
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionBtn";

const PostsList = () => {
    const posts = useSelector(selectAllPosts)

    const orderedPosts = posts.slice().sort((a,b)=> b.date.localeCompare(a.date))

    const renderPosts = orderedPosts.map(post =>(
        <article key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content.substring(0,100)}</p>

            <p className="postCredit">
              <PostAuthor userId ={post.userId} />
              <TimeAgo timestamp ={post.date} />
            </p>
            <ReactionButtons post={post}/>
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