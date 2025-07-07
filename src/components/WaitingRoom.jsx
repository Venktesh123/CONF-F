import React from "react";
import "./WaitingRoom.css";

const WaitingRoom = ({ roomId, username, onLeave }) => {
  return (
    <div className="waiting-room">
      <div className="waiting-container">
        <div className="waiting-icon">
          <div className="spinner"></div>
        </div>
        <h2>Waiting for Host Approval</h2>
        <p>
          You're in the waiting room for meeting: <strong>{roomId}</strong>
        </p>
        <p>The host will admit you shortly. Please wait...</p>
        <div className="waiting-info">
          <span>
            Joining as: <strong>{username}</strong>
          </span>
        </div>
        <button className="leave-waiting-button" onClick={onLeave}>
          Leave Waiting Room
        </button>
      </div>
    </div>
  );
};

export default WaitingRoom;
