import React, { useEffect, useState } from 'react'


const Timer1 = () => {

    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(2);

    var timer;
    useEffect(()=>{

        timer = setInterval(()=>{

            setSeconds(seconds -1);

            if(seconds===0){
                setMinutes(minutes-1);
                setSeconds(59);
            }

        },1000)

        return ()=> clearInterval(timer);

    });



const restart=()=>{

    setSeconds(0);
    setMinutes(0);

}

const stop=()=>{

    clearInterval(timer);

}

    return (
            <div className="timer">
            <div className="container">
                <div className="timer_container">
                    {/* <h1>Timer</h1> */}
                    <h6>Your session will end in: {minutes<10? "0" +minutes: minutes}:{seconds<10? "0" +seconds : seconds}</h6>

                    {/* <button className="restart" onClick={restart}>Restart</button>
                    <button className="stop" onClick={stop}>Stop</button> */}
                
                </div>

            </div>

            </div>
      )
}

export default Timer1