/** @jsx jsx */ /** @jsxRuntime classic */ 
import { jsx } from "theme-ui"
import { useState } from 'react'
import './App.css'

const buttonGroupTheme = {
  padding: '0px 4px',
  height: '48px',
  borderRadius: '4px',
  backgroundColor: '#181A20',
  display: 'inline-block',
  maxWidth: 'fit-content',
  display: 'flex',
  alignItems: 'center'
}

const buttonTheme = {
  height: '38px',
  width: '130px',
  borderRadius: '4px',
  background: 'linear-gradient(138.01deg, #70FAF7 0%, #15D5F3 100%)',
  cursor: 'pointer'
}

const ButtonGroup = ({items}) => {

  const [buttonId, setButtonId] = useState(0)

  const handleOnClick = (index) => {
    setButtonId(index)
  }

  return (
    <div sx={buttonGroupTheme}>
      {
        items.map((item, index) => {
          return (
              <Button onClick={() => handleOnClick(index)} index={index} active={buttonId === index ? true : false}>{item}</Button>
          )
        })
      }
    </div>
  )
}

const Button = ({children, active, onClick, index}) => {
  return (
    <button onClick={() => onClick(index)} sx={buttonTheme} style={active ? {} : {background: 'none', color: '#70FAF7', border: 'none'}}>{children}</button>
  )
}

function App() {
  return (
    <div className="App" sx={{display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
      <ButtonGroup items={['Cash/Debt Card', 'Manage Tokens']} />
    </div>
  );
}

export default App;
