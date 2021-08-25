import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Typography } from "@material-ui/core";
import DataViewer from "../components/DataViewer";
import FormData from "../components/FormData";
import { fetchPosts, deletePost, createPost } from "../redux";
import Search from "../components/Search";

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
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);
  useEffect(() => {
    setSearchTerm("");
    console.log("hola");
  }, [loading]);
  const handleSubmit = async (values, resetForm) => {
    try {
      await createPost(values);
      resetForm({ values: "" });
    } catch (error) {
      console.log(error);
    }
  };
  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);

    if (searchTerm !== "") {
      const filter = searchTerm.toLowerCase();
      const filteredData = data.filter((registry) =>
        registry.name.toLowerCase().includes(filter)
      );
      setSearchResults(filteredData);
    } else {
      setSearchResults(data);
    }
  };
  return (
    <>
      <Typography variant="h1" align="center" color="secondary">
        Home!
      </Typography>
      <Search searchTerm={searchTerm} searchHandler={searchHandler} />
      <DataViewer
        dataColumns={["name", "description"]}
        data={searchTerm.length < 1 ? data : searchResults}
        loading={loading}
        actions={[{ Delete: deleteData }]}
      />
      <FormData onSubmit={handleSubmit} loading={loading} />
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
