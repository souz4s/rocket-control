import Head from "next/head";
import axios from "axios";

const Home: React.FC = () => {
  const connect = async () => {
    const response = await axios.get(`http://localhost:8888/api/controller/connect`);

    return response;
  }

  const init = connect();

  return (
    <>
      <Head>
        <title>Rocket Control</title>
      </Head>
      <main />
      <footer />
    </>
  );
};

export default Home;
