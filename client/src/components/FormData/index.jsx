import React from "react";
import { Formik, Form } from "formik";
import { validationSchema, initialValues } from "../../schemas/post";
import { Grid } from "@material-ui/core";
import Textfield from "./Textfield";
import Button from "./Button";
import { Container } from "./styles";

const FormData = ({ onSubmit, submitBtn, loading }) => {
  return (
    <Container>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          onSubmit(values, resetForm);
        }}
      >
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Textfield name="name" label="Name" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Textfield name="description" label="Description" />
            </Grid>
            <Grid item xs={12}>
              {submitBtn ? (
                submitBtn
              ) : (
                <Button disabled={loading}>Submit</Button>
              )}
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </Container>
  );
};

export default FormData;
