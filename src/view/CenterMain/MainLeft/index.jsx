import "./index.css";
import { BorderBox7, Charts } from "@jiaminghi/data-view-react";
import { useSocket } from "../../../hooks/socket";
export default function MainLeft() {
  const { isConnected, temperature, humidity } = useSocket(
    "http://localhost:7001/"
  );
  const humiditys = {
    title: {
      text: "",
      style: {
        fill: "#fff",
      },
    },
    series: [
      {
        type: "gauge",
        radius: "95%",
        data: [{ name: "itemA", value: humidity }],
        center: ["50%", "55%"],
        min: 0,
        max: 100,
        splitNum : 11,
        axisLabel: {
          formatter: "{value}%",
          style: {
            fill: "#fff",
          },
          fontSize: 12
        },
        details:{
          show: true,
          offset: [0, 40],
          formatter: "湿度{value}%",
          style: {
            fill: "white"
          }
        },
        axisTick: {
          style: {
            stroke: "#fff",
          },
        },
        animationCurve: "easeInOutBack",
      },
    ],
  };
  const temperatures = {
    title: {
      text: "",
      style: {
        fill: "#fff",
      },
    },
    series: [
      {
        type: "gauge",
        radius: "95%",
        data: [{ name: "itemA", value: temperature }],
        center: ["50%", "55%"],
        min: -40,
        max: 125,
        splitNum : 8,
        axisLabel: {
          formatter: "{value}℃",
          style: {
            fill: "#fff",
          },
        },
        details:{
          show: true,
          offset: [0, 40],
          formatter: "温度{value}℃",
          style: {
            fill: "white"
          }
        },
        axisTick: {
          style: {
            stroke: "#fff",
          },
          tickLength: 10
        },
        animationCurve: "easeInOutBack",
      },
    ],
  };
  return (
    <div className="left-content">
      <div className="content-top">
        <BorderBox7>
          <h5>连接状态：{isConnected ? "已连接" : "未连接"}</h5>
          {/* <h5>消息：{fooEvents}</h5> */}
          <button>按钮</button>
        </BorderBox7>
      </div>
      <div className="content-center">
        {/* <BorderBox7> */}
        <Charts option={humiditys} />
        {/* </BorderBox7> */}
      </div>
      <div className="content-bottom">
        {/* <BorderBox7> */}
        <Charts option={temperatures} />
        {/* </BorderBox7> */}
      </div>
    </div>
  );
}
