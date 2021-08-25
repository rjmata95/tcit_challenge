import * as Yup from "yup";

export const validationSchema = Yup.object()
  .noUnknown()
  .shape({
    name: Yup.string().max(50).required("name is required").trim(),
    description: Yup.string()
      .max(1000)
      .required("description is required")
      .trim(),
  });

export const initialValues = {
  name: "",
  description: "",
};
