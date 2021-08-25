import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Typography } from "@material-ui/core";
import DataViewer from "../components/DataViewer";
import Loading from "../components/Loading";
import { fetchPosts } from "../redux";
import Counter from "../components/Counter";

const mapStateToProps = ({ posts, count }) => {
  return {
    posts: posts,
    count: count,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
  };
};

const Home = ({ posts, count, fetchPosts }) => {
  const { loading, error, data } = posts;
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <Typography variant="h1" align="center" color="secondary">
        Home!
      </Typography>
      {loading ? (
        <Loading />
      ) : error ? (
        <Typography variant="h6" color="primary">
          {error}
        </Typography>
      ) : (
        <>
          <Counter />
          {
            /* <DataViewer dataOld={dataOld} /> */
            data.map((item, i) => (
              <div key={item.id}>{item.description}</div>
            ))
          }
        </>
      )}
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
