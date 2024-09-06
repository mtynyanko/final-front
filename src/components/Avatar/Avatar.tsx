import "./Avatar.scss";

interface AvatarProps {
  username: string;
  image?: string | null;
}

const Avatar = ({ username, image }: AvatarProps) => {
  return (
    <>
      {image ? (
        <img src={image} className="avatar" />
      ) : (
        <p className="avatar no-image"> {username[0].toUpperCase()} </p>
      )}
    </>
  );
};
export default Avatar;
