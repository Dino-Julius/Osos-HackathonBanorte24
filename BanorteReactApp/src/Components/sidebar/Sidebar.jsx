import React from 'react';
import './Sidebar.css'; // Import the styles for this component

function Sidebar() {
  return (
    <div className="sidebar-card-container">
      <div className="card-button" onClick={() => console.log("Card 1 clicked")}>
        <h3>Card 1</h3>
        <p>Click me!</p>
      </div>
      <div className="card-button" onClick={() => console.log("Card 2 clicked")}>
        <h3>Card 2</h3>
        <p>Click me!</p>
      </div>
    </div>
  );
}

export default Sidebar;
