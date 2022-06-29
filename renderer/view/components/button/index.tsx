import { StartButton } from "./styles";
import axios from "axios";

const Button: React.FC = () => {
  const connect = async () => {
    const response = await axios.get(`http://localhost:8888/api/connect`);

    return response;
  };

  return (
    <>
      <StartButton onClick={connect}>CONNECT</StartButton>
    </>
  );
};

export default Button;
