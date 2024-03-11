//import { useState } from 'react'
import "./App.css";
import CenterMain from "./view/CenterMain/CenterMain";
import TopTitle from "./view/TopTitle/TopTitle";
import { Loading } from "@jiaminghi/data-view-react";
import { useSocket } from "./hooks/socket";
function App() {
  const { isConnected } = useSocket();
  return (
    <>
      {
        !isConnected ? 
        <div className="container">
          <nav className="nav">
            <TopTitle />
          </nav>
          <main className="main">
            <CenterMain />
          </main>
          {/* <footer className="footer">333</footer> */}
        </div>
        : <div className="container"><Loading>Loading...</Loading></div>
      }
    </>
  );
}

export default App;
