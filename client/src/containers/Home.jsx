import { useEffect } from "react";
import { connect } from "react-redux";
import { Typography } from "@material-ui/core";
import DataViewer from "../components/DataViewer";
import FormData from "../components/FormData";
import { fetchPosts, deletePost, createPost } from "../redux";

const mapStateToProps = ({ posts }) => {
  return {
    posts: posts,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    deleteData: (payload) => dispatch(deletePost(payload)),
    createPost: (payload) => dispatch(createPost(payload)),
  };
};

const Home = ({ posts, fetchPosts, deleteData, createPost }) => {
  const { loading, error, data } = posts;
  useEffect(() => {
    fetchPosts();
  }, []);
  const handleSubmit = (values, resetForm) => {
    try {
      console.log(values);
      createPost(values);
      resetForm({ values: "" });
      // return cb();
    } catch (error) {
      alert("Something went wrong, try again");
      console.log(error);
    }
  };
  return (
    <>
      <Typography variant="h1" align="center" color="secondary">
        Home!
      </Typography>
      <DataViewer
        dataColumns={["name", "description"]}
        data={data}
        loading={loading}
        actions={[{ Delete: deleteData }]}
      />
      <FormData onSubmit={handleSubmit} loading={loading} />
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
