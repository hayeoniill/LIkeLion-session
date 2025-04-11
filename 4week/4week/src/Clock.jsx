// /src/Clock.jsx
import React from "react";

function Clock(props) {
  return (
    <div>
      <h1>프론트 사자들은 세션 중!</h1>
      <h2>현재시간은: {new Date().toLocaleTimeString()}</h2>
    </div>
  );
}

export default Clock;
