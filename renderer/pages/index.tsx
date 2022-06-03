import Head from "next/head";
import Button from "../components/Button";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Rocket Control</title>
      </Head>
      <Button />
      <main />
      <footer />
    </>
  );
};

export default Home;
