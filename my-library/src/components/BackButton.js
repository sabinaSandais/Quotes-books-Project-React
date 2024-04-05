import React from "react";
import { useAppContext } from "../context/appContext";

const BackButton = () => {
    const { navigateBack } = useAppContext();
    const handleClick =() =>{
        navigateBack();
    }
  return (
    <button onClick={handleClick} className="back-button">
        Back
      
    </button>
  )
}

export default BackButton
