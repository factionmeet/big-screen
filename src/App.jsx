//import { useState } from 'react'
import "./App.css";
import CenterMain from "./view/CenterMain/CenterMain";
import TopTitle from "./view/TopTitle/TopTitle";
import { Loading } from "@jiaminghi/data-view-react";
import { useSocket } from "./hooks/socket";
function App() {
  const { isConnected, temperature, humidity, gatherSum, gatherDate, thirtyDataList } = useSocket(
    "http://localhost:7001/"
  );
  console.log("app", isConnected, temperature, humidity, gatherSum, gatherDate);
  return (
    <>
      {
        isConnected == true && (temperature !== 0 && humidity !==0 && gatherSum !==0 && gatherDate !==0) ? 
        <div className="container">
          <nav className="nav">
            <TopTitle />
          </nav>
          <main className="main">
            <CenterMain thirtyDataList={thirtyDataList} gatherDate={gatherDate} gatherSum={gatherSum} isConnected={isConnected} temperature={temperature} humidity={humidity} />
          </main>
          {/* <footer className="footer">333</footer> */}
        </div>
        : <div className="container"><Loading>Loading...</Loading></div>
      }
    </>
  );
}

export default App;
