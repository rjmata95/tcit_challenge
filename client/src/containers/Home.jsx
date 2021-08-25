import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { increaseCount, decreaseCount } from "../actions/countActions";
import { Typography } from "@material-ui/core";
import DataViewer from "../components/DataViewer";
import Loading from "../components/Loading";
import store from "../store";

const mapStateToProps = ({ posts, count }) => {
  return {
    data: posts,
    count: count,
  };
};
const mapDispatchToProps = {
  increaseCount,
  decreaseCount,
};

const Home = ({ data, count }) => {
  const [dataOld, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("MOCK_DATA.json")
      .then((res) => res.json())
      .then(
        (result) => {
          setData(result);
          setIsLoading(false);
        },
        (error) => {
          setError(error);
          setIsLoading(false);
          console.log(error);
        }
      );
  }, []);

  console.log(store.getState());
  return (
    <>
      <Typography variant="h1" align="center" color="secondary">
        Home!
      </Typography>
      {isLoading ? (
        <Loading />
      ) : error ? (
        <Typography variant="h6" color="primary">
          Couldnt connect to Database
        </Typography>
      ) : (
        <>
          {
            /* <DataViewer dataOld={dataOld} /> */
            dataOld.map((item, i) => (
              <div key={i}>{item.description}</div>
            ))
          }
        </>
      )}
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
