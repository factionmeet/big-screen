import { useEffect,useState } from 'react';
import { io } from 'socket.io-client'

export function useSocket() {
    const [isConnected, setIsConnected] = useState(false);
    useEffect(() => {
        const socket = io('http://localhost:7001/')
        // client-side
        socket.on("connect", () => {
            setIsConnected(true)
        });

        socket.on("disconnect", () => {
            console.log(socket.connected); // false
        });
        socket.on("connect_error", () => {
            socket.connect();
        });
        return () => {  
            if (socket) {  
                socket.disconnect();  
            }  
        };  
    },[])
    return { isConnected }
}



















