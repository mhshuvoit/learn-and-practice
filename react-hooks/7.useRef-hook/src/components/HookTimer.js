import React, {useState, useEffect, useRef} from 'react'

function HookTimer() {
  const [timer, setTimer] = useState(0)
  // const interValRef = useRef()

  useEffect(() => {
    const interval= setInterval(() => {
      setTimer(timer => timer + 1)
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  // useEffect(() => {
  //   interValRef.current = setInterval(() => {
  //     setTimer(timer => timer + 1)
  //   }, 1000)
  //   return () => {
  //     clearInterval(interValRef.current)
  //   }
  // }, [])

  return (
    <div>
      HookTimer - {timer} -
      <button onClick={() => clearInterval(interval)}>Clear Timer</button>
      {/* <button onClick={() => clearInterval(interValRef.current)}>Clear Timer</button> */}
    </div>
  )
}

export default HookTimer
