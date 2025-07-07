import React from "react";
import {
  FaMicrophone,
  FaMicrophoneSlash,
  FaVideo,
  FaVideoSlash,
  FaPhoneSlash,
  FaUserFriends,
  FaUserClock,
} from "react-icons/fa";
import "./Controls.css";

const Controls = ({
  audioEnabled,
  videoEnabled,
  toggleAudio,
  toggleVideo,
  leaveRoom,
  toggleParticipants,
  participantsCount,
  isHost,
  waitingCount,
  toggleWaitingRoom,
}) => {
  return (
    <div className="controls">
      <button
        className={`control-button ${
          !audioEnabled ? "control-button-off" : ""
        }`}
        onClick={toggleAudio}
      >
        {audioEnabled ? (
          <>
            <FaMicrophone />
            <span>Mute</span>
          </>
        ) : (
          <>
            <FaMicrophoneSlash />
            <span>Unmute</span>
          </>
        )}
      </button>

      <button
        className={`control-button ${
          !videoEnabled ? "control-button-off" : ""
        }`}
        onClick={toggleVideo}
      >
        {videoEnabled ? (
          <>
            <FaVideo />
            <span>Stop Video</span>
          </>
        ) : (
          <>
            <FaVideoSlash />
            <span>Start Video</span>
          </>
        )}
      </button>

      <button className="control-button" onClick={toggleParticipants}>
        <FaUserFriends />
        <span>Participants ({participantsCount})</span>
      </button>

      {isHost && (
        <button
          className={`control-button ${
            waitingCount > 0 ? "control-button-notification" : ""
          }`}
          onClick={toggleWaitingRoom}
        >
          <FaUserClock />
          <span>
            Waiting Room
            {waitingCount > 0 && (
              <span className="notification-badge">{waitingCount}</span>
            )}
          </span>
        </button>
      )}

      <button
        className="control-button control-button-danger"
        onClick={leaveRoom}
      >
        <FaPhoneSlash />
        <span>Leave</span>
      </button>
    </div>
  );
};

export default Controls;
