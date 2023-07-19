import { useState } from "react";
export default function BatteryInput({ onBatteryChange }) {
  const [selectedBattery, setSelectedBattery] = useState("");
  const handleBatteryChange = (event) => {
    const newBattery = event.target.value;
    setSelectedBattery(newBattery);
    onBatteryChange(newBattery);
  };

  return (
    <div>
      <h4>battery?</h4>
      <input
        id="batteryyes"
        type="radio"
        name="battery"
        value="yes"
        checked={selectedBattery === "yes"}
        onChange={handleBatteryChange}
      />
      <label htmlFor="batteryyes">yes</label>
      <input
        id="batteryno"
        type="radio"
        name="battery"
        value="no"
        checked={selectedBattery === "no"}
        onChange={handleBatteryChange}
      />
      <label htmlFor="batteryno">no</label>
    </div>
  );
}
