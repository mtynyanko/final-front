import "./Error.scss";

interface ErrorProps {
  errorMessage: string;
}

const Error = ({ errorMessage } : ErrorProps) => {
  return (
    <div className="error-screen">
      <div className="screen">
        <span className="error-message">
          {errorMessage.toUpperCase()}
        </span>
      </div>
    </div>
  );
};
export default Error;
