import React, { useState, useEffect } from "react";
import axios from "axios"; // Importa axios para hacer la solicitud HTTP
import { useLocation } from "react-router-dom";
import "./ChatbotContainer.css";

function ChatbotContainer() {
  const location = useLocation(); // Hook para obtener la ubicación actual y sus parámetros
  const [messages, setMessages] = useState([]); // Estado para almacenar los mensajes del chat
  const [input, setInput] = useState(""); // Estado para manejar el valor del campo de entrada
  const [showWidget, setShowWidget] = useState(false); // Estado para mostrar/ocultar el widget

  // Establece un mensaje inicial si existe un prompt en el estado de la ubicación
  useEffect(() => {
    if (location.state?.prompt) {
      setInput(location.state.prompt); // Si hay un prompt, se inicializa en el campo de entrada
    }
  }, [location.state]);

  // Inject Dialogflow styles and script dynamically on component mount
  useEffect(() => {
    // Add Dialogflow styles
    const link = document.createElement("link");
    link.href = "https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/themes/df-messenger-default.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    // Add Dialogflow script
    const script = document.createElement("script");
    script.src = "https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js";
    document.body.appendChild(script);

    return () => {
      // Cleanup when the component unmounts
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  // Maneja el envío de un mensaje
  const handleSendMessage = async () => {
    if (input.trim()) { // Verifica que el campo de entrada no esté vacío
      const newMessage = { text: input, sender: "user" }; // Crea el nuevo mensaje del usuario
      setMessages((prevMessages) => [...prevMessages, newMessage]); // Agrega el mensaje a la lista de mensajes

      setInput(""); // Limpia el campo de entrada después de enviar el mensaje

      // Llama a la API de Dialogflow para obtener la respuesta del bot
      const botResponse = await getBotResponse(input);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: botResponse, sender: "bot" }, // Agrega la respuesta del bot a los mensajes
      ]);
    }
  };

  // Función para hacer la llamada a la API de Dialogflow
  const getBotResponse = async (message) => {
    const projectId = "gcp-banorte-hackaton-team-1"; // Project ID de Dialogflow
    const sessionId = Math.random().toString(36).substring(7); // ID de sesión único para el usuario
    const apiKey = "your-dialogflow-api-key"; // Reemplaza con tu API key de Dialogflow

    const url = `https://dialogflow.googleapis.com/v2/projects/${projectId}/agent/sessions/${sessionId}:detectIntent`;

    const requestBody = {
      queryInput: {
        text: {
          text: message,
          languageCode: "es", // Idioma de la interacción
        },
      },
    };

    try {
      // Realiza la solicitud a la API de Dialogflow usando axios
      const response = await axios.post(url, requestBody, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
      });

      // Devuelve el texto de la respuesta del bot
      return response.data.queryResult.fulfillmentText;
    } catch (error) {
      console.error("Error al obtener respuesta del bot:", error);
      return "Lo siento, hubo un problema al obtener la respuesta del bot.";
    }
  };

  return (
    <div className="chatbot-container">
      {/* Contenedor del chatbot personalizado */}
      <div className="chatbot-dialogs">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`chat-message ${message.sender === "user" ? "user-message" : "bot-message"}`} // Asigna clases CSS según el remitente
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="chatbot-input-wrapper">
        <div className="chatbot-input-container">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)} // Actualiza el estado del input con lo que escribe el usuario
            className="chatbot-input"
            placeholder="Escribe un mensaje..." // Placeholder del campo de entrada
          />
          {input && (
            <button className="clear-button" onClick={() => setInput("")}>
              &times; {/* Botón para limpiar el campo de entrada */}
            </button>
          )}
        </div>
        <button onClick={handleSendMessage} className="chatbot-send-button">
          Enviar {/* Botón para enviar el mensaje */}
        </button>
      </div>

      {/* Botón para mostrar/ocultar el widget */}
      <button onClick={() => setShowWidget(!showWidget)} className="toggle-widget-button">
        {showWidget ? "Ocultar Chat" : "Mostrar Chat"} {/* Cambia el texto del botón */}
      </button>

      {/* Widget de Dialogflow inicialmente oculto */}
      {showWidget && (
        <df-messenger
          location="us-central1"
          project-id="gcp-banorte-hackaton-team-1"
          agent-id="ac0f27e9-2054-43ce-9727-00d6e1d692e5"
          language-code="es-419"
          max-query-length="-1"
        >
          <df-messenger-chat-bubble chat-title="Banorte Intelligence"></df-messenger-chat-bubble>
        </df-messenger>
      )}
    </div>
  );
}

export default ChatbotContainer;
