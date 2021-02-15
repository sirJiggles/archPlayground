import React, { useState } from 'react'
import logo from './logo.svg'
import './index.css'
import { Button } from '../Button'
import axios from 'axios'

function App() {
  const [time, setTime] = useState('')
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>the most complicated simple app in history</p>
        <Button
          onClick={async () => {
            // hit the API and get the date
            try {
              const getDateRequest = await axios.get(
                process.env.REACT_APP_API_GATEWAY_ENDPOINT || '',
              )
              setTime(getDateRequest.data.theTime)
            } catch (error) {
              throw new Error(error)
            }
          }}
        >
          Get the time
        </Button>
        <h1>The time is: {time}</h1>
      </header>
    </div>
  )
}

export default App
