import * as ButtonStyle from "@/view/components/button";
import axios from "axios";

const Button: React.FC = () => {
  const connect = async () => {
    const response = await axios.get(
      `http://localhost:8888/api/controller/connect`
    );

    return response;
  };

  return (
    <>
      <ButtonStyle.StartButton onClick={connect}>
        CONNECT
      </ButtonStyle.StartButton>
    </>
  );
};

export default Button;
