import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";



const PostAuthor = ({userId}) => {
    const users = useSelector(selectAllUsers);

  const author = users.find(user => parseInt(user.id) === parseInt(userId));
  console.log('athor', )

  return (
      <span>
          by
          {author ? author.name : 'unknown author'}
    </span>
  )
}

export default PostAuthor