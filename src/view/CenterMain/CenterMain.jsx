import "./CenterMain.css";
import MainLeft from "./MainLeft";
import MainCenter from "./MainCenter";
import MainRight from "./MainRight";
export default function CenterMain() {
  return (
    <div className="center-main">
      <div className="main-left">
        <MainLeft />
      </div>
      <div className="main-center">
        <MainCenter />
      </div>
      <div className="main-right">
        <MainRight />
      </div>
    </div>
  );
}
