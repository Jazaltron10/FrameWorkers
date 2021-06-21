import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
const counting=(e:any)=>{
  
  const styles = e.currentTarget.classList
  if(styles.contains('plus')){
    setCount((count)=> count + 1);
  }
  else if(styles.contains('minus')){
    setCount((count)=> count - 1)
  }
  else{
    setCount(()=> 0)
  }
}

  return (
    <div className="App">

      <header className="App-header">
      
          <div className="DisplayNum" >
              {count}
          </div>
          
          <div className="btnCon">
            {/* This button is for increasing */}
            <button className="plus" type="button" onClick={counting}>
                Increase
            </button>

            {/* This button is for resetting */}
            <button className = "reset" type="button" onClick={counting}>
                Reset
            </button>

            {/* This button is for decreasing */}
            <button className="minus" type="button" onClick={counting}>
                Decrease
            </button>
          
          </div>
        
        
      </header>
    </div>
  )
}


export default App