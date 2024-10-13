import React from 'react';
import './App.css'
import ChatbotContainer from './Components/chatbotContainer/ChatbotContainer';
import Sidebar from './Components/sidebar/Sidebar';

function App() {
  return (
    <div className="AppBACK">
      <div className="App">
        <Sidebar />
        <ChatbotContainer />

      </div>
      
  
    </div>
  );
}

export default App;