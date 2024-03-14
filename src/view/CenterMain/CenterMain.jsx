import "./CenterMain.css";
import MainLeft from "./MainLeft";
import MainCenter from "./MainCenter";
import MainRight from "./MainRight";
import { Loading } from "@jiaminghi/data-view-react";
export default function CenterMain(props) {
  // eslint-disable-next-line react/prop-types
  const { isConnected, temperature, humidity, gatherSum, gatherDate, thirtyDataList } = props; // 解构props中的属性
  return (
    <div className="center-main">
      <div className="main-left">
        <MainLeft gatherSum={gatherSum}  isConnected={isConnected} temperature={temperature} humidity={humidity}  />
      </div>
      <div className="main-center">
        <MainCenter thirtyDataList={thirtyDataList} gatherDate={gatherDate} isConnected={isConnected} temperature={temperature} humidity={humidity}  />
      </div>
      <div className="main-right">
      {
      // eslint-disable-next-line react/prop-types
      thirtyDataList.length === 0 ? (
        <Loading style={{ height: "100%", width: "100%" }} />
      ) : (
        <MainRight thirtyDataList={thirtyDataList} gatherDate={gatherDate} isConnected={isConnected} temperature={temperature} humidity={humidity}  />
      )}
        {/* <MainRight thirtyDataList={thirtyDataList} gatherDate={gatherDate} isConnected={isConnected} temperature={temperature} humidity={humidity}  /> */}
      </div>
    </div>
  );
}
