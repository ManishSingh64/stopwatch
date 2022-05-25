import React, { useEffect } from 'react'

const Counter = ({startTime,lastTime}) => {
  
    const [clock, setClock] = React.useState(startTime)
  
    useEffect(() => {
        
            let id= setInterval(() =>{

               if(clock < lastTime){
                setClock((prev) => prev + 1);
               }else{
                   clearInterval(id)
               }
    },1000);

        return () =>{
            clearInterval(id)
        };
    },[clock,lastTime]);
        
    return (

    <div>
        <h3>count: {clock}</h3>
        <p>start time: {startTime}  last time: {lastTime}</p>
        </div>
  )
}

export default Counter