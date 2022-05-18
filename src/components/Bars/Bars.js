import { useContext } from "react";
import { VscThreeBars, VscClose } from "react-icons/vsc";
import { MyContext } from "../../context/useNavbarContext";

const Bars = () => {
  const { handleClick, isOpen } = useContext(MyContext);
  return (
    <span className="bars" onClick={handleClick}>
      {isOpen ? <VscClose /> : <VscThreeBars />}
    </span>
  );
};

export default Bars;
