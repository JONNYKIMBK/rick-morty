import React, { useState } from "react";

function ResetButton({ onReset }) {
  return (
    <button onClick={onReset} className="reset-button">
      Reset
    </button>
  );
}

export default ResetButton;
