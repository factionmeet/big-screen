import "./index.css";
import { BorderBox7 } from "@jiaminghi/data-view-react";
import { message } from "antd";
import { useSocket } from "../../../utils/socket";
export default function MainLeft() {
  const { socket, isConnected, fooEvents } = useSocket("http://localhost:7001/");
  const buttonEvents = () => {
    socket.connect()
    socket.emit("ping", "你好我发送了数据");
    console.log("socket", socket, "isConnected", isConnected);
    message.success("发送成功");
  };
  return (
    <div className="left-content">
      <div className="content-top">
        <BorderBox7>
          <h5>连接状态：{isConnected? "已连接" : "未连接"}</h5>
          <h5>消息：{fooEvents}</h5>
          <button onClick={buttonEvents}>按钮</button>
        </BorderBox7>
      </div>
      <div className="content-center">
        <BorderBox7>BorderBox10</BorderBox7>
      </div>
      <div className="content-bottom">
        <BorderBox7>BorderBox7</BorderBox7>
      </div>
    </div>
  );
}
