import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const currentYear = new Date().getFullYear();

  return (
    <>
    <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <div><p>Movietime</p>
      <p>Movie1</p>
      <p>Movie2</p>
      <p>Movie3</p>
      <p>Movie4</p>
      </div>
      <header><nav>TEST</nav></header>
      
      
      
      <footer>
        <p>&copy; {currentYear} AlixReactDemo. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App
