import { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { message } from 'antd';
export function useSocket(URL) {
    const socket = io(URL);
    const [isConnected, setIsConnected] = useState(socket.connected);
    const [fooEvents, setFooEvents] = useState([]);
    const [temperature, setTemperature] = useState(0);
    const [humidity, setHumidity] = useState(0);
    useEffect(() => {
        function onConnect() {
            setIsConnected(true);
            socket.on("disconnect", onDisconnect);
            socket.emit("lastData", "我发送了数据请求");
        }
        function onDisconnect() {
            setIsConnected(false);
            message.warning("连接断开");
        }
        function onFooEvent(value) {
            //message.success(`我接受到了send数据,temp:${value.temperature},hum:${value.humidity}`);
            setFooEvents(value);
            setTemperature(value.temperature);
            setHumidity(value.humidity);
            //console.log(value);
        }
        function onResEvent(value) {
            const res = JSON.parse(value);
            //message.success(`我接受到了lastData数据,temp:${res.temperature},hum:${res.humidity}`);
            setTemperature(res.temperature);
            setHumidity(res.humidity);
        }
        socket.on("connect", onConnect);
        socket.on("send", onFooEvent);
        socket.on("connects", (data) => {
            message.success(`${data}`);
        });
        socket.on("res", onResEvent);
        return () => {
            socket.off('connect', onConnect);
            socket.off('disconnect', onDisconnect);
            socket.off('send', fooEvents);
            socket.off("res", onResEvent)
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // 返回socket和messages状态，以及新增的isConnected状态  
    return { socket, isConnected, fooEvents, temperature, humidity};
}