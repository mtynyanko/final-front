import { Tag } from "../../types/model.types";
import Avatar from "../Avatar";
import DateBlock from "../DateBlock";

import "./PostItem.scss";

interface PostProps {
  title: string;
  content: string;
  imageURL: string;
  tags: Tag[];
  author: string;
  avatar?: string | null;
  createdAt: Date;
}

const PostItem = ({
  title,
  content,
  imageURL,
  tags,
  author,
  avatar,
  createdAt,
}: PostProps) => {
  return (
    <div className="card">
      <div className="post-box">
        <img className="image" src={imageURL} />
        <div className="separation"></div>
        <div className="text">
          <div className="post-header">
            <h3 className="title">{title}</h3>
            <DateBlock date={createdAt} className="date" />
          </div>
          <div className="tags">
            {tags.map((tag) => tag.name).join(', ')}
          </div>
          <div className="content">{content}</div>
        </div>
        <div className="author">
          <div className="author-name">{author}</div>
          <Avatar image={avatar} username={author} />
        </div>
      </div>
    </div>
  );
};
export default PostItem;
