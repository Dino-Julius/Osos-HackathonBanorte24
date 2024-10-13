import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import "./FunctionCard.css";

function FunctionCard({ initialText, hoverText, targetPath, prompt }) {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate(); // Inicializa useNavigate

  const handleClick = () => {
    // Navigate to the target path and pass the prompt via state
    navigate(targetPath, { state: { prompt } });
  };

  return (
    <motion.div
      className={`card ${hovered ? "card-hover" : ""}`}
      initial={{ scale: 1 }}
      animate={hovered ? { scale: 1.2 } : { scale: 1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      transition={{ duration: 0.3 }}
      onClick={handleClick} // Navega al hacer clic
    >
      <div className="card-content">
        {hovered ? hoverText : initialText}
      </div>
    </motion.div>
  );
}

export default FunctionCard;
