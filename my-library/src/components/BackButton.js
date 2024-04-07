import { useAppContext } from "../context/appContext";
import "./BackButton.css";

const BackButton = () => {
  const { navigateBack } = useAppContext();
  const handleClick = () => {
    navigateBack();
  };
  return (
    <button onClick={handleClick} className="back-btn">
      Back
    </button>
  );
};

export default BackButton;
