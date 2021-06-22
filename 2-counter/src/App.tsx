import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState('');

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


const arrcolor = ['lime', 'red', 'yellow']
const randomNumber = Math.floor(Math.random() * arrcolor.length);
useEffect(() => {

  if (count > 0){
    setColor(arrcolor[0])
  }
  else if(count < 0){
    setColor(arrcolor[1])
  }
  else{
    setColor(arrcolor[2])
  }
})


  return (
    <div className="App">
      <section className="App-header">
        <header className="header">
          THE COUNTER APP
        </header>
        <section className="overlay">
          
          <div className="DisplayNum" style={{ color: color }}>
              {count}
          </div>
          
          {/* This Section is for the buttons  */}
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
        </section>
      </section>
    </div>
  )
}


export default App