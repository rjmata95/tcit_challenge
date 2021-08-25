// import { TextField, withStyles } from "@material-ui/core";
import { useField } from "formik";
import { InputField } from "../../../styles";

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
