import { CircularProgress } from "@material-ui/core";

const Loading = () => {
  return (
    <CircularProgress
      style={{
        padding: "4rem",
        position: "relative",
        left: "35%",
      }}
      size={200}
    />
  );
};

export default Loading;
