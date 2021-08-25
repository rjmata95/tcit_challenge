import React from "react";
import { Typography, Button } from "@material-ui/core";
import { increaseCount, decreaseCount } from "../../redux";
import { connect } from "react-redux";
const mapStateToProps = ({ count }) => ({
  count: count,
});
const mapDispatchToProps = (dispatch) => {
  return {
    increaseCount: (payload) => dispatch(increaseCount(payload)),
    decreaseCount: (payload) => dispatch(decreaseCount(payload)),
  };
};
const Counter = ({ count, increaseCount, decreaseCount }) => {
  return (
    <>
      <Typography color="secondary">
        this is the count: {count.count}
      </Typography>
      <Button variant="contained" onClick={() => increaseCount(1)}>
        increase count
      </Button>
      <Button variant="contained" onClick={() => decreaseCount(1)}>
        decrease count
      </Button>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
