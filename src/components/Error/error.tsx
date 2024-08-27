import React from "react";

import './error.scss';

interface ErrorProps {
    errorObject: Error;
}

const Error: React.FC<ErrorProps> = ({ errorObject }) => {
    return (
        <div className="error-screen">
          <div className="screen">
              <span className="error-message"> {errorObject.message.toUpperCase()}</span>
          </div>
        </div>
        
    )
}
export default Error