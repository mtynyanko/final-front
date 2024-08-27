import { CircularProgress } from "@mui/material";

import "./Loading.scss";

const Loading = () => {
  return (
    <div className="loading-screen">
      <CircularProgress color='inherit' />
    </div>
  );
};
export default Loading;
