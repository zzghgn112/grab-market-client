import React from "react";

function Timers() {
  const [time, setTime] = React.useState(0);
  console.log("컴포 업데쇼");

  function updates() {
    setTime(time + 1);
  }
  return (
    <div>
      <h3>{time}초</h3>
      <button onClick={updates}>s</button>
    </div>
  );
}

export default Timers;
