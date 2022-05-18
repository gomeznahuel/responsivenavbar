import { createContext, useState } from "react";
const MyContext = createContext();

const MyContexProvider = ({ children }) => {
  const [display, setDisplay] = useState("none");
  const [opacity, setOpacity] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setDisplay(display === "none" ? "flex" : "none");
    setOpacity(display === "none" ? 0 : 1);
    setIsOpen(!isOpen);
  };

  return (
    <MyContext.Provider value={{ display, setDisplay, handleClick, opacity, setOpacity, isOpen }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContexProvider };
