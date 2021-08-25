import React from "react";
import { InputField, Container, CustomButton } from "../../styles";
import { Grid } from "@material-ui/core";
const Search = ({ searchTerm, searchHandler }) => {
  const handleChange = ({ target: { value } }) => {
    searchHandler(value);
  };
  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     console.log();
  //   };
  return (
    <Container>
      {/* <form> */}
      <Grid container justifyContent="space-between">
        <InputField
          variant="outlined"
          placeholder="Search by Name..."
          onChange={handleChange}
          fullWidth
          value={searchTerm}
        />
        {/* <CustomButton>Search</CustomButton> */}
      </Grid>
      {/* </form> */}
    </Container>
  );
};

export default Search;
