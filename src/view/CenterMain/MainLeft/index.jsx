import "./index.css";
import { BorderBox7, Charts } from "@jiaminghi/data-view-react";
import { message } from "antd";
import { useSocket } from "../../../hooks/socket";
export default function MainLeft() {
  const { socket, isConnected, fooEvents, temperature, humidity } = useSocket(
    "http://localhost:7001/"
  );
  const buttonEvents = () => {
    //socket.connect()
    if (socket.connected) {
      socket.emit("send", "我需要数据");
      console.log(
        "socket",
        socket,
        "isConnected",
        isConnected,
        "fooEvents",
        fooEvents
      );
      message.success("发送成功");
      socket.on("res", (data) => {
        message.success(`接收到来自服务器的广播：${data}`);
        const result = JSON.parse(data);
        console.log("result", result);
        result.humidity ? setHum(result.humidity) : setHum(0);
        result.temperature ? setTemp(result.temperature) : setTemp(0);
      });
    } else {
      message.error("连接失败");
    }
  };
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
        data: [{ name: "itemA", value: humidity }],
        center: ["50%", "55%"],
        axisLabel: {
          formatter: "{value}%",
          style: {
            fill: "#fff",
          },
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
        data: [{ name: "itemA", value: temperature }],
        center: ["50℃", "55℃"],
        axisLabel: {
          formatter: "{value}℃",
          style: {
            fill: "#fff",
          },
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
  return (
    <div className="left-content">
      <div className="content-top">
        <BorderBox7>
          <h5>连接状态：{isConnected ? "已连接" : "未连接"}</h5>
          {/* <h5>消息：{fooEvents}</h5> */}
          <button onClick={buttonEvents}>按钮</button>
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
