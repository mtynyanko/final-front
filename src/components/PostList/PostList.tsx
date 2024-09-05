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
  const IS_PAGE_EMPTY = !posts.length;

  useEffect(() => {
    dispatch(requestPosts());
  }, [dispatch]);

  if (isLoading) return <Loading />;

  return (
    <>
      {error && <Error errorMessage={error.message} />}
      {IS_PAGE_EMPTY && <Error errorMessage={"no posts for today"} />}
      <div className="container">
        {posts.map((post) => (
          <PostItem
            key={post.id}
            title={post.header}
            content={post.content}
            tags={post.tags}
            imageURL={post.imageUrl}
            avatar={post.author.avatar}
            author={post.author.login}
            createdAt={post.createdAt}
          />
        ))}
      </div>
    </>
  );
};

export default PostList;
