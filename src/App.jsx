//import { useState } from 'react'
import "./App.css";
import CenterMain from "./view/CenterMain/CenterMain";
import TopTitle from "./view/TopTitle/TopTitle";
function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <nav className="nav">
          <TopTitle />
        </nav>
        <main className="main">
          <CenterMain />
        </main>
        {/* <footer className="footer">333</footer> */}
      </div>
    </>
  );
}

export default App;
