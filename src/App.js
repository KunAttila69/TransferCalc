import { useState } from "react";

function App() {
  const [capacity, setCapacity] = useState()
  const [capacityUnit, setCapacityUnit] = useState(1)
  const [transferSpeed, setTransferSpeed] = useState()
  const [speedUnit, setSpeedUnit] = useState(Math.pow(1000,1)*8)
  const [time, setTime] = useState()
  
  const capacityUnits = [{"name":"MegaByte","value":1},{"name":"GigaByte","value":Math.pow(1000,-1)},{"name":"TeraByte","value":Math.pow(1000,-2)}]
  const speedUnits = [{"name":"mb/s","value":Math.pow(1000,1)*8},{"name":"KB/s","value":Math.pow(1000,1)},{"name":"MB/s","value":1},{"name":"GB/s","value":Math.pow(1000,-1)}]

  const Calculate = () => {
    setTime(capacity*capacityUnit/transferSpeed*speedUnit)
  }

  return (
    <div className="App">
      <main>
        <div className="capacity-container">
          <h3>Kapacitás:</h3>
          <input type="number" min="1" onChange={(e)=>setCapacity(e.target.value)}/>
          <select name="capacity-unit" id="capacity-unit" onChange={(e)=>setCapacityUnit(e.target.value)}>
            {capacityUnits.map((unit)=>{
              return <option key={unit.name} value={unit.value}>{unit.name}</option>
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
                return <option key={unit.name} value={unit.value}>{unit.name}</option>
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
