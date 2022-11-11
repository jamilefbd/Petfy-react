import { Wrapper } from "./styles";
import catdog from "../../assets/img/catdog.svg";

const Side = () => {
  return (
    <Wrapper>
      <img src={catdog} alt="Cat and Dog" />
    </Wrapper>
  );
};

export default Side;
