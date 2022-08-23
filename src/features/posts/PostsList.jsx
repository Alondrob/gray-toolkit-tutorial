import { useSelector, useDispatch } from "react-redux";
import { selectAllPosts, getPostsStatus, getPostsError, fetchPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import { useEffect } from "react";

const PostsList = () => {
       const posts = useSelector(selectAllPosts);
    const postStatus = useSelector(getPostsStatus);
    const error = useSelector(getPostsError);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts())
    }, [])
    
    console.log(posts)
    
    // const renderPosts = posts.map(post => (
    //     <article key={post.id}>
    //         <h3>{post.title}</h3>
    //         <p>{post.content.substring(0, 100)}</p>
    //         <p>
    //              <PostAuthor userId={post.userId}/>
    //         </p>
    //     </article>
    // ))
  return (
      <section>
          <h2>Posts</h2>
          {posts.map(post => 
              <div>{post.title}</div>
            )}
    </section>
  )
}

export default PostsList