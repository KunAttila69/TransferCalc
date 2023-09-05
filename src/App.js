import { useState } from "react";

function App() {
  const [capacity, setCapacity] = useState()
  const [capacityUnit, setCapacityUnit] = useState()
  const [transferSpeed, setTransferSpeed] = useState()
  const [speedUnit, setSpeedUnit] = useState()
  const [time, setTime] = useState()
  
  const capacityUnits = ["MegaByte","GigaByte","TeraByte"]
  const speedUnits = ["mb/s","KB/s","MB/s","GB/s"]

  const Calculate = () => {
    setTime(0)
    const capacityValue = Math.abs(capacity)               * Math.pow(1000,capacityUnits.indexOf(capacityUnit)+1)
    
    const speedDifference = Math.abs(2-speedUnits.indexOf(speedUnit))
    let speedValue
    if(speedDifference === 2){
      speedValue = 8*1000
    }
    else{
      speedValue = Math.pow(1000,speedDifference)
    }
    setTime(capacityValue/transferSpeed*speedValue)
  }

  return (
    <div className="App">
      <main>
        <div className="capacity-container">
          <h3>Kapacitás:</h3>
          <input type="number" min="1" onChange={(e)=>setCapacity(e.target.value)}/>
          <select name="capacity-unit" id="capacity-unit" onChange={(e)=>setCapacityUnit(e.target.value)}>
            {capacityUnits.map((unit)=>{
              return <option key={unit} value={unit}>{unit}</option>
            })}
          </select>
        </div>
        <div className="capacity-container">
          <h3>Átviteli sebesség:</h3>
    
          <div className="slider-container">
            <input type="range" min="10" max="5000" defaultValue="50" className="slider" id="speedSlider" onChange={(e)=>setTransferSpeed(e.target.value)}/>
            <p>{transferSpeed}</p>
            <select name="capacity-unit" id="capacity-unit" onChange={(e)=>setSpeedUnit(e.target.value)}>
              {speedUnits.map((unit)=>{
                return <option key={unit} value={unit}>{unit}</option>
              })}
            </select>
          </div>
        </div>
        <button onClick={Calculate}>Számol</button>
        <p>{time ? time : "?"} sec</p>
      </main>
    </div>
  );
}

export default App;
