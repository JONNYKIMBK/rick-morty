import React, { useState } from "react";
import "./resetButton.css";

function ResetButton({ onReset }) {
  return (
    <button onClick={onReset} className="reset-button">
      Reset filters
    </button>
  );
}

export default ResetButton;
