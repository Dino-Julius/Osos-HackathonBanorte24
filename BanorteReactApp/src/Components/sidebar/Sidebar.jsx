import React from 'react';
import { UilTrashAlt, UilFileAlt, UilHistory } from '@iconscout/react-unicons'; // Import Unicons
import './Sidebar.css'; // Import the styles for this component
import logo from '../../imgs/logo2.png'; 

function Sidebar() {
  return (
    <div>
      {/* Título en la parte superior */}
      <div className="sidebar-title">
        <img className="LgoINT" src={logo} style={{ width: '300px', height: "auto" }}/>
      </div>

      <div className="sidebar-card-container">
        <div className="card-button" onClick={() => console.log("Trash clicked")}>
          <UilTrashAlt size="40" color="#eb0029" /> {/* Icon for trash */}
        </div>
        <div className="card-button" onClick={() => console.log("Document clicked")}>
          <UilFileAlt size="40" color="#eb0029" /> {/* Icon for document */}
        </div>
        <div className="card-button" onClick={() => console.log("History clicked")}>
          <UilHistory size="40" color="#eb0029" /> {/* Icon for history */}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
