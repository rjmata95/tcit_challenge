import { TextField, withStyles } from "@material-ui/core";
import { useField } from "formik";

const InputField = withStyles((theme) => ({
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

const TextfieldWrapper = ({ name, ...otherProps }) => {
  const [field, meta] = useField(name);
  // const classes = useStyles();

  const configTestField = {
    ...field,
    ...otherProps,
    fullWidth: true,
    variant: "outlined",
  };

  if (meta && meta.touched && meta.error) {
    configTestField.error = true;
    configTestField.helperText = meta.error;
  }

  return (
    <>
      <InputField {...configTestField} />
    </>
  );
};

export default TextfieldWrapper;
