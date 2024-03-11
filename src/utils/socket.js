import { useState, useEffect } from 'react';
import io from 'socket.io-client';

export function useSocket() {
    const [messages, setMessages] = useState([]);
    const [socket, setSocket] = useState(null);
    const [isConnected, setIsConnected] = useState(false); // 追踪连接状态  

    useEffect(() => {
        const newSocket = io('http://localhost:7001/connection');
        setSocket(newSocket);

        newSocket.on('res', (msg) => {
            setIsConnected(true); // 连接成功时更新状态  
            console.log('======', msg);
            setMessages((prevMessages) => [...prevMessages, msg]);
        });

        newSocket.on('disconnect', () => {
            setIsConnected(false); // 连接断开时更新状态  
        });

        newSocket.on('message', (msg) => {
            setMessages((prevMessages) => [...prevMessages, msg]);
        });

        return () => {
            if (newSocket) {
                newSocket.disconnect();
            }
        };
    }, []);

    // 返回socket和messages状态，以及新增的isConnected状态  
    return { socket, messages, isConnected };
}