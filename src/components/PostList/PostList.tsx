import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Error from "../Error/Error";
import { MyDispatch } from "../../redux/store";
import { requestPosts } from "../../redux/actions/actions";
import PostItem from "../PostItem/PostItem";
import Loading from "../Loading/Loading";
import { useTypedSelector } from "../../hooks";
import "./PostList.scss";

const PostList = () => {
  const dispatch: MyDispatch = useDispatch();
  const posts = useTypedSelector((state) => state.posts);
  const isLoading = useTypedSelector((state) => state.isLoading);
  const error = useTypedSelector((state) => state.error);
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
