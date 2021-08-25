import { styled, withStyles, TextField, Button } from "@material-ui/core";

export const Container = styled((props) => <div {...props} />)(({ theme }) => ({
  // display: "flex",
  // flexDirection: "",
  // justifyContent: "space-around",
  margin: "2rem 0",
  backgroundColor: theme.palette.background.secondary,
  borderRadius: "25px",
  padding: "2rem",
}));

export const InputField = withStyles((theme) => ({
  root: {
    "& label.Mui-focused": {
      color: theme.palette.secondary.main,
    },
    "& label": {
      color: theme.palette.secondary.main,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: theme.palette.secondary.main,
      },
      "&:hover fieldset": {
        borderColor: theme.palette.secondary.dark,
      },
      "&.Mui-focused fieldset": {
        color: theme.palette.secondary.main,
        borderColor: theme.palette.secondary.light,
      },
    },
  },
}))(TextField);

export const CustomButton = (props) => (
  <Button variant="outlined" color="secondary" {...props} />
);
