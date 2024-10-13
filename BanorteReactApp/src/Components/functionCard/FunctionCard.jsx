import React, { useState } from "react";
import { motion } from "framer-motion"; // Importa la librería para animaciones
import { useNavigate } from "react-router-dom"; // Importa useNavigate para la navegación entre rutas
import "./FunctionCard.css";

function FunctionCard({ initialText, hoverText, targetPath, prompt }) {
  const [hovered, setHovered] = useState(false); // Estado para controlar si la tarjeta está siendo "hovered"
  const navigate = useNavigate(); // Inicializa useNavigate para la navegación

  const handleClick = () => {
    // Navega a la ruta especificada y pasa el prompt vía estado
    navigate(targetPath, { state: { prompt } });
  };

  return (
    <motion.div
      className={`card ${hovered ? "card-hover" : ""}`} // Añade una clase CSS extra cuando está "hovered"
      initial={{ scale: 1 }} // Escala inicial de la tarjeta
      animate={hovered ? { scale: 1.2 } : { scale: 1 }} // Animación de escala cuando se hace hover
      onMouseEnter={() => setHovered(true)} // Cambia el estado a "hovered" cuando el mouse entra en la tarjeta
      onMouseLeave={() => setHovered(false)} // Cambia el estado a "no hovered" cuando el mouse sale de la tarjeta
      transition={{ duration: 0.3 }} // Duración de la transición de la animación
      onClick={handleClick} // Llama a la función para navegar al hacer clic en la tarjeta
    >
      <div className="card-content">
        {hovered ? hoverText : initialText} {/* Muestra el texto según el estado hover */}
      </div>
    </motion.div>
  );
}

export default FunctionCard;
