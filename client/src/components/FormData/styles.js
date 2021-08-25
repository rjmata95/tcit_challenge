import { styled } from "@material-ui/core";

export const Container = styled((props) => <div {...props} />)(({ theme }) => ({
  //   display: "flex",
  //   flexDirection: "column",
  minHeight: "10vh",
  margin: "2rem 0",
  backgroundColor: theme.palette.background.secondary,
  borderRadius: "25px",
  padding: "2rem",
}));
