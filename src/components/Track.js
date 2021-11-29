import React from 'react'
import { useState, useEffect } from 'react'
import Buttons from './Buttons'

const Track = () => {
    const [time, setTime] = useState(0)
    const [seconds, setSeconds] = useState('00')
    const [minutes, setMinutes] = useState('00')
    const [hours, setHours] = useState('00')
    const [isActive, setIsActive] = useState(false)
    const [category, setCategory] = useState("")
    // 0: Initial
    // 1: Running
    // 2: Paused
    // 3: Ready for submission
    const [timerState, setTimerState] = useState(0)
    var timerHTML = (<div></div>)

    function updateTimer(t) {
        const hours = Math.floor(t / 3600);
        const minutes = Math.floor((t % 3600) / 60);
        const seconds = (t % 3600) % 60;

        setSeconds(String(seconds).length === 1 ? `0${seconds}`: seconds)
        setMinutes(String(minutes).length === 1 ? `0${minutes}`: minutes)
        setHours(String(hours).length === 1 ? `0${hours}`: hours)
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

    function onChange(event) {
        setCategory(event.target.value)
     }
  
    function onSubmit() {
        const today = new Date();
        const date = {
            year: today.getFullYear(),
            month: today.getMonth()+1,
            day: today.getDate()
        }

        fetch(`http://localhost:9000`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                category: category,
                duration: time,
                date: date
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


    if(timerState != 3) 
        timerHTML = (                
        <div className='time'>
            <h1>{hours}:{minutes}:{seconds}</h1>
        </div>)

    return (
        <div className='wrapper'>
            <div className='timer'>
                {timerHTML}
                <Buttons timerState={timerState} startTimer={startTimer} resetTimer={resetTimer} pauseTimer={pauseTimer} submitTime={submitTime} onChange={onChange} onSubmit={onSubmit} category={category}/>
            </div>
        </div>

    )
}

export default Track
