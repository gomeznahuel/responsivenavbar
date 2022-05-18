import { useContext } from "react";
import { MyContext } from "../../context/useNavbarContext";
import "./ContactPage.css";

const ContactPage = () => {
  const { opacity } = useContext(MyContext);

  return (
    <div className="contact" style={{ opacity }}>
      This is the Contact Page
    </div>
  );
};

export default ContactPage;
