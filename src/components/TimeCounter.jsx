import React, { useEffect, useState } from 'react'
import './style/timeCounter.style.css'

const TimeCounter = () => {

  const [seconds, setSeconds] = useState(59);
  const [minutes, setMinutes] = useState(2);
  const [hours, setHours] = useState(0);
  const [formMinutes, setFormMinutes] = useState('');
  const [start, setStart] = useState('');


  useEffect(() => {
    if (start) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
      if (seconds === 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      }
      if (minutes === 0 && hours > 0) {
        setHours(hours - 1)
        setMinutes(59)
        setSeconds(59)
      }
    }
  
  }, [start, seconds, minutes, hours]);

  const onHandleRest = () => {
    setStart(false);
    setSeconds(59);
    setMinutes(2);
    setHours(0);
    setFormMinutes('');
  }
  const onSubmitHandler = (e) => {
    e.preventDefault()
    if (formMinutes === 0) {
        setStart(false)
        setMinutes(0)
        setSeconds(59)
    }
    if (formMinutes > 0 && formMinutes < 60) {
        setStart(false)
        setHours(0)
        setMinutes(formMinutes)
        setSeconds(0)
    }
    if (formMinutes > 60) {
      let _min, _hrs;
        setStart(false)
        _hrs = Math.floor(formMinutes/60)
        if(formMinutes > _hrs * 60){
          _min = formMinutes -_hrs * 60
        }
        setHours(_hrs)
        setMinutes(_min)
        setSeconds(0)
    }
  }


  return (
    <div className="container">
      <h1 className="counter-title">
        The Timer App
      </h1>
      <div className="watch-counter">
        <span>{hours.toString().padStart(2,'0')}</span> : <span>{minutes.toString().padStart(2,'0')}</span> : <span>{seconds}</span>
      </div>
      <div className="btn-group">
        <button className='btn' onClick={() => setStart(true)}>start</button>
        <button className='btn' onClick={()=> setStart(false)}>Pause</button>
        <button disabled={ start} className='btn' onClick={onHandleRest}>Reset</button>
        <button className='btn' onClick={() => setStart(false)}>stop</button>
      </div>
      <div className="input-section">
        <form action="" onSubmit={e => onSubmitHandler(e)}>
          <input className="input" value={formMinutes} placeholder="Enter Your Countdown Time" onChange={(e) => { setFormMinutes(e.target.value) }} type='number' />
          <button type="submit"  >set Timer</button>
        </form>
      </div>
    </div>
  )
}

export default TimeCounter