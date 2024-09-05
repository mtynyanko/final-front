import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { MyDispatch } from "../../redux/store";
import { requestPosts } from "../../redux/actions/postActions";
import { useTypedSelector } from "../../types/hook.types";
import Error from "../Error";
import PostItem from "../PostItem";
import Loading from "../Loading";

import "./PostList.scss";



const PostList = () => {
  const dispatch: MyDispatch = useDispatch();
  const posts = useTypedSelector((state) => state.post.posts);
  const isLoading = useTypedSelector((state) => state.post.isLoading);
  const error = useTypedSelector((state) => state.post.error);

  useEffect(() => {
    dispatch(requestPosts());
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  } else if (error) {
    return <Error errorObject={error} />;
  } else if (!posts.length) {
    <span className="message">no news for today</span>;
  } else {
    return (
      <div className="container">
        {posts.map((post) => (
          <PostItem
            key={post.id}
            title={post.header}
            content={post.content}
            imageURL={post.imageUrl}
            avatar={post.author.avatar}
            author={post.author.login}
            createdAt={post.createdAt}
          />
        ))}
      </div>
    );
  }
};

export default PostList;
