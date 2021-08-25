import { styled } from "@material-ui/core";
export const Background = styled((props) => <div {...props} />)(
  ({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    backgroundColor: theme.palette.background.secondary,
  })
);

// export const TableTypography = styled((props) => (
//   <Typography variant="h6" color="textSecondary" {...props} />
// ));
