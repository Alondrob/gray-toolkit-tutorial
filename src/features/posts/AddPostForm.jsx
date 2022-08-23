import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postsSlice";
import { selectAllUsers } from '../users/usersSlice';
import './Posts.css'

const AddPostForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);

  const users = useSelector(selectAllUsers)

  const savePost = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId));
      setContent("");
      setTitle("");
      setUserId("");
    }
  };
  console.log(users)


  // // const canSave = [title, content, userId].every(Boolean) && addRequestStatus === 'idle';
  // const canSave = Boolean(title) && Boolean(content) && Boolean(userId)
  return (
    <section class="section">
      <form >
        <label class="formPart" htmlFor="postTitle">Post Title </label>
        <input
          class="formPart"
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />

        <label class="formPart" htmlFor="postContent">Content:</label>
        <textarea
          class="formPart"
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <br></br>
        <select class="formPart" onChange={(e) => setUserId(e.target.value)} >
          {users.map(user =>
            <option key={user.id} value={user.id} >
            {user.name}
          </option>
          )}
        </select>

        
    <br></br>
    <br></br>

        <button class="formPart" type="button" onClick={savePost} >
          {" "}
          Save Post!
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
