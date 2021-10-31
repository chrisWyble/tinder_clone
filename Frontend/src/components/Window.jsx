import React, { Component } from "react";
import profile001_1 from "sample/profile001/photos/6C59FeQfP5wNnTmAZuwLPU.jpg";

class Window extends React.Component {
  render() {
    return (
      <div>
        <h1>Hey I am a window component</h1>
        <div className="image">
          <img src={profile001_1} alt="imageTest" />
        </div>
        <div className="buttonSection">
          <div className="buttonGroup">
            <button></button>
            <button></button>
            <button></button>
            <button></button>
          </div>
        </div>
      </div>
    );
  }
}

export default Window;
