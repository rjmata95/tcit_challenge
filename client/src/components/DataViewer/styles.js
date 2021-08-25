import {
  TableCell,
  TableContainer,
  Typography,
  styled,
  Table,
} from "@material-ui/core";

export const TableHeader = (props) => (
  <TableCell align="right" variant="head" {...props} />
);
export const TableField = (props) => (
  <TableCell
    align="center"
    variant="body"
    {...props}
    style={{ color: "#000" }}
  />
);

export const TableTypography = (props) => (
  <Typography variant="h6" color="textSecondary" {...props} />
);

export const Container = styled(TableContainer)(({ theme }) => ({
  height: "40vh",
  backgroundColor: "#fff",
}));

// const StyledTable = styled(Table)(({theme})=>({
//     minHeight: "100%"
// }))
// export const Container = (props) => <TableContainer {...props} />;
