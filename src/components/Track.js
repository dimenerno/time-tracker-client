import React from 'react'
import { useState, useEffect } from 'react'
import Buttons from './Buttons'

const Track = () => {
    const [time, setTime] = useState(0)
    const [seconds, setSeconds] = useState('00')
    const [minutes, setMinutes] = useState('00')
    const [hours, setHours] = useState('00')
    const [isActive, setIsActive] = useState(false)

    // 0: Initial
    // 1: Running
    // 2: Paused
    const [timerState, setTimerState] = useState(0)

    function updateTimer(t) {
        const hours = Math.floor(t / 3600);
        const minutes = Math.floor((t % 3600) / 60);
        const seconds = (t % 3600) % 60;

        setSeconds(String(seconds).length === 1 ? `0${seconds}`: seconds)
        setMinutes(String(minutes).length === 1 ? `0${minutes}`: minutes)
        setHours(String(hours).length === 1 ? `0${hours}`: hours)
    }

    function startTimer() {
        setIsActive(true);
        setTimerState(1)
    }

    function resetTimer() {
        setIsActive(false);
        setTime(0);
        setTimerState(0)
    }

    function pauseTimer() {
        setIsActive(false);
        setTimerState(2)
    }

    function submitTime() {
        console.log("On development!")
    }

    useEffect(() => {
        let interval;
        if(isActive) {
            interval = setInterval(() => {
                updateTimer(time);
                setTime(time + 1);
            }, 1000)
        } else {
            updateTimer(time)
        }
        return () => { clearInterval(interval) }
    }, [isActive, time]);

    return (
        <div className='wrapper'>
            <div className='timer'>
                <div className='time'>
                    <h1>{hours}:{minutes}:{seconds}</h1>
                </div>
                <Buttons timerState={timerState} startTimer={startTimer} resetTimer={resetTimer} pauseTimer={pauseTimer} submitTime={submitTime}/>
            </div>
        </div>

    )
}

export default Track
