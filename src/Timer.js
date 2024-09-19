import React, {useState, useEffect, useRef} from "react";
export default function Timer() {
    const [hours, setHours] = useState(1);
    const [minutes, setMinutes] = useState(45);
    const [seconds, setSeconds] = useState(30);
    const [totalMilliseconds, setTotalMilliseconds] = useState(((1*60*60) + (45*60) + 30)*1000);

    useEffect(() => {
        setTimeout(() => {
            setTotalMilliseconds(totalMilliseconds - 1000);
        }, 1000)
    }, [totalMilliseconds]);

    const getFormattedTime = () => {
        const totalSeconds = parseInt(Math.floor(totalMilliseconds / 1000));
        const totalMinutes = parseInt(Math.floor(totalSeconds / 60));
        const totalHours = parseInt(Math.floor(totalMinutes / 60));

        const seconds2 = parseInt(totalSeconds % 60);
        const minutes2 = parseInt(totalMinutes % 60);
        const hours2 = parseInt(totalHours % 24);

        return `${hours2}:${minutes2}:${seconds2}`;
    };

    return (
        <>
            <p>{getFormattedTime()}</p>
        </>
    )
}