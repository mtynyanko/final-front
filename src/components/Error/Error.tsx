import "./Error.scss";

interface ErrorProps {
  errorObject: Error;
}

const Error = ({ errorObject } : ErrorProps) => {
  return (
    <div className="error-screen">
      <div className="screen">
        <span className="error-message">
          {errorObject.message.toUpperCase()}
        </span>
      </div>
    </div>
  );
};
export default Error;
