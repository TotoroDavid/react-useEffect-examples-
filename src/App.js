import React, { useState } from 'react'
import LifeCycle from './LifeCycle'
import FetchCard from './FetchCard'
import Resize from './Resize'

const App = () => {

  const [show, setShow] = useState(false)

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        show/Hide
      </button>
      {
        show && <Resize />
      }
      <LifeCycle />
      <FetchCard />
    </div>
  )
}

export default App
