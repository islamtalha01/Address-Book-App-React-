import React from "react";

const Loading = () => {
  return (
    <div className="loading-container" style={ {
        width: "100%",
        textAlign: "center",
        margin: '2rem',
      }}
      
     >
      <div className="lds-ripple" style={ {
        display: "inline-block",
        position: "relative",
        width: 80,
        height: 80,
      }}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;