import React, { useState } from 'react'

export default function state({init}) {
    const [count, setCount] = useState(init);
    const handleClick = () => setCount(count + 1);
  return (
    <div>
        <button onClick={handleClick}>カウント</button>
        <p>{count}回、クリックされました</p>
    </div>
  )
}
