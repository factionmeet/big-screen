import { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { message } from 'antd';
export function useSocket(URL) {
    const socket = io(URL);
    const [isConnected, setIsConnected] = useState(socket.connected);
    const [fooEvents, setFooEvents] = useState([]);

    useEffect(() => {
        function onConnect() {
            setIsConnected(true);
            socket.on("disconnect", onDisconnect);
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
        socket.on("connects", (data) => {
            message.success(`${data}`);
        });
        return () => {
            socket.off('connect', onConnect);
            socket.off('disconnect', onDisconnect);
            socket.off('ping', onFooEvent);
        };
    }, [socket, isConnected, fooEvents]);

    // 返回socket和messages状态，以及新增的isConnected状态  
    return { socket, isConnected, fooEvents };
}