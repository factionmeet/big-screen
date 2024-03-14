import { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { message } from 'antd';
export function useSocket(URL) {
    const socket = io(URL);
    const [isConnected, setIsConnected] = useState(socket.connected);
    const [fooEvents, setFooEvents] = useState([]);
    const [temperature, setTemperature] = useState(0);
    const [humidity, setHumidity] = useState(0);
    const [gatherSum, setGatherSum ] = useState(0);
    const [gatherDate, setGatherDate] = useState(0);
    const [thirtyDataList, setThirtyDataList] = useState([]);
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
            //数据采集的时候触发
            //message.success(`我接受到了send数据,temp:${value.temperature},hum:${value.humidity}`);
            setFooEvents(value);
            setTemperature(value.temperature);
            setHumidity(value.humidity);
            setGatherSum(value.id);
            setGatherDate(value.updatedAt);
        }
        function onResEvent(value) {
            //初始化页面的时候触发
            const res = JSON.parse(value);
            console.log("res",res);
            //message.success(`我接受到了lastData数据,temp:${res.temperature},hum:${res.humidity},${res.id},${res.updatedAt}`);
            setTemperature(res.temperature);
            setHumidity(res.humidity);
            setGatherSum(res.id);
            setGatherDate(res.updatedAt);
        }
        function onThirtyDataEvent(value) {
            //message.success(`我接受到了thirtyData数据,${value}`);
            console.log("value",value);
            setThirtyDataList(value);
        }
        socket.on("connect", onConnect);
        socket.on("send", onFooEvent);
        socket.on("connects", (data) => {
            message.success(`${data}`);
        });
        socket.on("res", onResEvent);
        socket.on("thirtyData", onThirtyDataEvent);
        return () => {
            socket.off('connect', onConnect);
            socket.off('disconnect', onDisconnect);
            socket.off('send', fooEvents);
            socket.off("res", onResEvent);
            socket.off("thirtyData", onThirtyDataEvent);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // 返回socket和messages状态，以及新增的isConnected状态  
    return { socket, isConnected, fooEvents, temperature, humidity, gatherSum, gatherDate, thirtyDataList };
}