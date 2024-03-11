import "./index.css";
import { BorderBox7 } from "@jiaminghi/data-view-react";
import { message } from "antd";
import io from "socket.io-client";
import { useEffect, useState } from "react";

export default function MainLeft() {
  const socket = io("http://localhost:7001/");
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [fooEvents, setFooEvents] = useState([]);
  const buttonEvents = () => {
    socket.connect()
    socket.emit("ping", "你好我发送了数据");
    console.log("socket", socket, "isConnected", isConnected);
    setIsConnected(true)
    message.success("发送成功");
  };
  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
      socket.on("disconnect", onDisconnect);
      socket.on("ping", onFooEvent);
    }
  
    function onDisconnect() {
      setIsConnected(false);
      message.warning("连接断开");
    }
  
    function onFooEvent(value) {
      setFooEvents((previous) => [...previous, value]);
    }
    socket.on("connect", onConnect);
    socket.on("ping", onFooEvent);
    socket.on("connects", (data) =>{
      message.success(`${data}`);
    });
    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('ping', onFooEvent);
    };
  },[socket, isConnected, fooEvents]);
  return (
    <div className="left-content">
      <div className="content-top">
        <BorderBox7>
          <h5>连接状态：{isConnected}</h5>
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
