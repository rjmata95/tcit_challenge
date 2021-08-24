import { Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import DataViewer from "../components/DataViewer";
import Loading from "../components/Loading";

const Home = () => {
  const [data, setData] = useState(null);
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
            /* <DataViewer data={data} /> */
            data.map((item, i) => (
              <div key={i}>{item.description}</div>
            ))
          }
        </>
      )}
    </>
  );
};

export default Home;
