import React from "react";
import { FaCheck, FaTimes, FaUser } from "react-icons/fa";
import "./HostApproval.css";

const HostApproval = ({ participants, onApprove, onReject, onClose }) => {
  if (participants.length === 0) {
    return (
      <div className="host-approval">
        <div className="approval-container">
          <div className="approval-header">
            <h3>Waiting Room</h3>
            <button className="close-button" onClick={onClose}>
              <FaTimes />
            </button>
          </div>
          <div className="no-waiting">
            <FaUser className="no-waiting-icon" />
            <p>No one is waiting to join</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="host-approval">
      <div className="approval-container">
        <div className="approval-header">
          <h3>Waiting Room ({participants.length})</h3>
          <button className="close-button" onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        <div className="waiting-list">
          {participants.map((participant) => (
            <div key={participant.id} className="waiting-participant">
              <div className="participant-info">
                <div className="participant-avatar">
                  {participant.username.charAt(0).toUpperCase()}
                </div>
                <div className="participant-details">
                  <span className="participant-name">
                    {participant.username}
                  </span>
                  <span className="waiting-time">
                    Waiting since{" "}
                    {new Date(participant.joinedAt).toLocaleTimeString()}
                  </span>
                </div>
              </div>

              <div className="approval-actions">
                <button
                  className="approve-button"
                  onClick={() => onApprove(participant.id)}
                  title="Admit to meeting"
                >
                  <FaCheck />
                </button>
                <button
                  className="reject-button"
                  onClick={() => onReject(participant.id)}
                  title="Deny entry"
                >
                  <FaTimes />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HostApproval;
