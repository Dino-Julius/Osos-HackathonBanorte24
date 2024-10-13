import React, { useState } from "react";
import "./ChatbotContainer.css";

function ChatbotContainer() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput("");
      // Simulate a bot response if needed
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-dialogs">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`chat-message ${message.sender === "user" ? "user-message" : "bot-message"}`}
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
            onChange={(e) => setInput(e.target.value)}
            className="chatbot-input"
            placeholder="Esrcibe un mensaje..."
          />
          {input && (
            <button className="clear-button" onClick={() => setInput("")}>
              &times; {/* Clear button (X icon) */}
            </button>
          )}
        </div>
        <button onClick={handleSendMessage} className="chatbot-send-button">
          Envíar {/* Send button */}
        </button>
      </div>
    </div>
  );
}

export default ChatbotContainer;
