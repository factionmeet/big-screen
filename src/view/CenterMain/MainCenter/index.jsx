import "./index.css";
import { BorderBox8 } from "@jiaminghi/data-view-react";
//import * as echarts from "echarts";
//import { useEffect, useState, useRef } from "react";
import Page from "./Dynamic";
import { Loading } from "@jiaminghi/data-view-react";
//import { message } from "antd";
export default function MainCenter(props) {
  console.log("MainCenter", props);
  // eslint-disable-next-line react/prop-types
  const { temperature, humidity, gatherDate, thirtyDataList } = props;
  // eslint-disable-next-line react/prop-types
  // const { temperature, humidity, gatherDate } = props;
  // const chartsDom = useRef(null);
  // const myChart = useRef(null);
  // const [dataT, setDataT] = useState([]);
  // const [dataH, setDataH] = useState([]);
  // // eslint-disable-next-line no-unused-vars
  // const [option, setOption] = useState({
  //   title: {
  //     text: "数据统计",
  //     textStyle: {
  //       color: "white",
  //     },
  //     top: "3%",
  //     left: "3%",
  //   },
  //   tooltip: {
  //     trigger: "item",
  //     axisPointer: {
  //       type: "cross",
  //       animation: false,
  //     },
  //     formatter: function (params) {
  //       params = params[0];
  //       var date = new Date(params.name);
  //       console.log("params[0]", params[0], "params[1]", params[1]);
  //       return (
  //         date.getFullYear() +
  //         "/" +
  //         (date.getMonth() + 1) +
  //         "/" +
  //         date.getDate() +
  //         "<br>" +
  //         date.getHours().toString().padStart(2, "0") +
  //         ":" +
  //         date.getMinutes().toString().padStart(2, "0") +
  //         ":" +
  //         date.getSeconds().toString().padStart(2, "0") +
  //         "<br> " +
  //         "<span style='color:yellow'>" +
  //         "<span style='font-size:20px;'>●</span></span>温度" +
  //         "<br>" +
  //         "<span style='color:red'>" +
  //         "<span style='font-size:20px;'>●</span></span>湿度"
  //       );
  //     },
  //   },
  //   grid: {
  //     left: "3%",
  //     right: "4%",
  //     bottom: "1%",
  //     containLabel: true,
  //   },
  //   xAxis: {
  //     type: "time",
  //     splitLine: {
  //       show: false,
  //     },
  //     interval: 1000,
  //     axisLabel: {
  //       color: "white",
  //     },
  //   },
  //   yAxis: {
  //     type: "value",
  //     boundaryGap: [0, "100%"],
  //     splitLine: {
  //       show: true,
  //     },
  //     axisLabel: {
  //       color: "white",
  //     },
  //     min: -40,
  //     max: 100,
  //   },
  //   series: [
  //     {
  //       name: "温度",
  //       type: "line",
  //       showSymbol: false,
  //       data: [],
  //       itemStyle: {
  //         color: "yellow",
  //       },
  //     },
  //     {
  //       name: "湿度",
  //       type: "line",
  //       showSymbol: false,
  //       data: [],
  //       itemStyle: {
  //         color: "red",
  //       },
  //     },
  //   ],
  // });
  // useEffect(() => {
  //   myChart.current = echarts.init(chartsDom.current);
  //   function famerOption(temperature, humidity, gatherDate) {
  //     if (temperature === 0 && humidity === 0 && gatherDate === 0) {
  //       return;
  //     }
  //     console.log("famerOption", temperature, humidity, gatherDate);
  //     const now = new Date(gatherDate);
  //     const temp = {
  //       name: now.toString(),
  //       value: [
  //         [now.getFullYear(), now.getMonth() + 1, now.getDate()].join("/"),
  //         temperature,
  //       ],
  //     };
  //     const hum = {
  //       name: now.toString(),
  //       value: [
  //         [now.getFullYear(), now.getMonth() + 1, now.getDate()].join("/"),
  //         humidity,
  //       ],
  //     };
  //     console.log("temp", temp, "hum", hum);
  //     if (dataT.length === 300) {
  //       setDataT(dataT.filter((item, index) => index !== 0)); // 删除头部元素 // 在尾部添加新元素
  //     }
  //     /* const newDataT = [...dataT, temp];
  //     console.log("dataT", [...dataT, temp]); */
  //     setDataT([
  //       ...dataT,
  //       {
  //         name: now.toString(),
  //         value: [
  //           [now.getFullYear(), now.getMonth() + 1, now.getDate()].join("/"),
  //           temperature,
  //         ],
  //       },
  //     ]);
  //     if (dataH.length === 300) {
  //       setDataH(dataH.filter((item, index) => index !== 0)); // 删除头部元素 // 在尾部添加新元素
  //     }
  //     const newDataH = [...dataH, hum];
  //     console.log("dataH", [...dataH, hum]);
  //     setDataH(newDataH); // 删除头部元素 // 在尾部添加新元素
  //     console.log("dataT", dataT, "dataH", dataH);
  //   }
  //   famerOption(temperature, humidity, gatherDate);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [temperature, humidity, gatherDate]);
  // useEffect(() => {
  //   console.log("dataT-------", dataT, "dataH--------", dataH);
  //   myChart.current.setOption({
  //     series: [
  //       {
  //         data: dataT,
  //       },
  //       {
  //         data: dataH,
  //       },
  //     ],
  //   });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [dataT, dataH]);
  // useEffect(() => {
  //   const now = new Date();
  //   const temp = {
  //     name: now.toString(),
  //     value: [
  //       [now.getFullYear(), now.getMonth() + 1, now.getDate()].join("/"),
  //       temperature,
  //     ],
  //   };
  //   const hum = {
  //     name: now.toString(),
  //     value: [
  //       [now.getFullYear(), now.getMonth() + 1, now.getDate()].join("/"),
  //       humidity,
  //     ],
  //   };
  //   setDataT([
  //     ...dataT,
  //     {
  //       name: now.toString(),
  //       value: [
  //         [now.getFullYear(), now.getMonth() + 1, now.getDate()].join("/"),
  //         temperature,
  //       ],
  //     },
  //   ]);
  //   const newDataH = [...dataH, hum];
  //   console.log("dataH", [...dataH, hum]);
  //   setDataH(newDataH); // 删除头部元素 // 在尾部添加新元素
  //   myChart.current.setOption(option);
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // },[]);
  return (
    <div className="center-content">
      <BorderBox8 reverse={true}>
        {/* <div
          ref={chartsDom}
          id="charts"
          style={{ height: "96%", width: "100%" }}
        ></div> */}
        {
      // eslint-disable-next-line react/prop-types
      thirtyDataList.length === 0 ? (
        <Loading style={{ height: "100%", width: "100%" }} />
      ) : (
        <Page thirtyDataList={thirtyDataList} temperature={temperature} humidity={humidity} gatherDate={gatherDate} />
      )}
        {/* <Page thirtyDataList={thirtyDataList} temperature={temperature} humidity={humidity} gatherDate={gatherDate} /> */}
      </BorderBox8>
    </div>
  );
}
