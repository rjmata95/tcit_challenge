import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Typography } from "@material-ui/core";
import DataViewer from "../components/DataViewer";
import Loading from "../components/Loading";
import { fetchPosts, deletePost } from "../redux";
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
    deleteData: (payload) => dispatch(deletePost(payload)),
  };
};

const Home = ({ posts, count, fetchPosts, deleteData }) => {
  const { loading, error, data } = posts;
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <Typography variant="h1" align="center" color="secondary">
        Home!
      </Typography>
      {/* 
      {loading ? (
        <Loading />
      ) : error ? (
        <Typography variant="h6" color="primary">
          {error}
        </Typography>
      ) : (
        <>
          <Counter />
          <DataViewer data={data} />
        </>
      )} */}
      <DataViewer
        dataColumns={["name", "description"]}
        data={data}
        loading={loading}
        actions={[{ Delete: deleteData }]}
      />
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
