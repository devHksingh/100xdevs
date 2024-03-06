import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";

const PostAuthor = ({ userId }) => {
    const users = useSelector(selectAllUsers)

    const author = users.find(user => user.id === userId);
    console.log(author);
    return <span>by {author ? author.name : 'Unknown author'}{console.log(userId)}</span>
}
export default PostAuthor