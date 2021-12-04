import React from 'react'
import { useState, useEffect } from 'react'
import '../css/track.css'
import Buttons from './Buttons'
import formatTime from '../helper/formatTime'

const Track = () => {
    // 0: Initial
    // 1: Running
    // 2: Paused
    // 3: Ready for submission
    const [timerState, setTimerState] = useState(0)
    const [time, setTime] = useState(0)
    const [seconds, setSeconds] = useState('00')
    const [minutes, setMinutes] = useState('00')
    const [hours, setHours] = useState('00')
    const [isActive, setIsActive] = useState(false)
    const [category, setCategory] = useState("")
    
    var timerHTML = (<div></div>)

    function updateTimer(t) {
        const formatted_time = formatTime(t)
        setSeconds(formatted_time.seconds)
        setMinutes(formatted_time.minutes)
        setHours(formatted_time.hours)
    }

    function startTimer() {
        setIsActive(true)
        setTimerState(1)
    }

    function pauseTimer() {
        setIsActive(false)
        setTimerState(2)
    }

    function resetTimer() {
        setTime(0)
        setTimerState(0)
    }

    function submitTime() {
        setTimerState(3)
        setCategory("")
    }
  
    function onSubmit() {
        fetch(`http://localhost:9000`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                category: category,
                time: time,
            })
        }).then(res => {
            if(res.ok) alert("Succeded!")
            else alert("Error!")
        })
        setTime(0)
        setTimerState(0)
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

    // Hide timer during submission
    if(timerState !== 3) 
        timerHTML = (                
        <div className='time'>
            <h1>{hours}:{minutes}:{seconds}</h1>
        </div>)

    return (
        <div className='wrapper'>
            <div className='timer'>
                {timerHTML}
                <Buttons timerState={timerState} startTimer={startTimer} resetTimer={resetTimer} pauseTimer={pauseTimer} submitTime={submitTime} setCategory={setCategory} onSubmit={onSubmit} category={category}/>
            </div>
        </div>

    )
}

export default Track
