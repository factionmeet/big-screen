import { useEffect, useState } from "react";
import "./index.css";
import { BorderBox7, ScrollBoard } from "@jiaminghi/data-view-react";
import { cloneDeep } from "lodash";
import { Loading } from "@jiaminghi/data-view-react";
export default function MainRight(props) {
  // eslint-disable-next-line react/prop-types
  const { temperature, humidity, gatherDate, thirtyDataList } = props;
  //let [configData, setConfigData] = useState([]);
  let config = {
    header: ["时间", "温度(℃)", "湿度(%)"],
    data: (function(){
      let res = []
      // eslint-disable-next-line react/prop-types
      const len = thirtyDataList.length
      for(let i = 0; i < len; i++){
        const item = thirtyDataList[i]
        // eslint-disable-next-line react/prop-types
        const date = new Date(item.createdAt);
        const year = date.getFullYear();
        const month = (date.getMonth() + 1);
        const day = date.getDate();
        const hours = date.getHours()
        const minutes = date.getMinutes()
        const seconds = date.getSeconds()
        const newDateStr = `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
        // eslint-disable-next-line react/prop-types
        res.push([newDateStr, item.temperature, item.humidity])
      }
      console.log("thirtyDataList格式化1", res);
      return res;
    })() /* [["2024/3/12 08:00:00", "12", "33"]] */,
    index: false,
    columnWidth: [270, 100, 100],
    rowNum: 15,
    align: ["center", "center", "center", "center"],
    carousel: 'single'
  };
  const [configs, setConfigs] = useState(config);
  console.log("right", props);
  useEffect(() => {
    function setConfigEvent(temperature, humidity, gatherDate) {
      // eslint-disable-next-line no-debugger
      debugger;
      if (!gatherDate) {
        return;
      }
      const date = new Date(gatherDate);
      const year = date.getFullYear();
      const month = (date.getMonth() + 1);
      const day = date.getDate();
      const hours = date.getHours()
      const minutes = date.getMinutes()
      const seconds = date.getSeconds()
      const newDateStr = `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
      // if (configData.length === 15) {
      //   setConfigData(
      //     configData.filter((item, index) => index != 0)
      //   )
      // }
      // configData.push([newDateStr, temperature, humidity]);
      // setConfigData([
      //   ...configData,
      //   [newDateStr, temperature, humidity],
      // ])
      // console.log("data", configData);
      // console.log("config", config);
      // setConfigs(config);
      const newOption = cloneDeep(configs);
      const newData = newOption.data
      newData.shift()
      newData.push([newDateStr, temperature, humidity])
      setConfigs(newOption)

    }
    setConfigEvent(temperature, humidity, gatherDate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [temperature, humidity, gatherDate]);
  return (
    <div className="right-content">
      <BorderBox7>
      {
      // eslint-disable-next-line react/prop-types
      thirtyDataList.length === 0 ? (
        <Loading style={{ height: "100%", width: "100%" }} />
      ) : (
        <ScrollBoard
          config={configs}
          style={{ width: "100%", height: "100%" }}
        />
      )}
      </BorderBox7>
    </div>
  );
}
