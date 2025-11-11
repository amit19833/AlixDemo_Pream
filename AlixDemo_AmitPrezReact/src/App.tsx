import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import LandingPage from './LandingPage';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import FilmDetails from './FilmDetails';
import PickSeats from './PickSeats';
import Checkout from './Checkout';
import Ticket from './Tickets';
import NotFound from './NotFound'; 

const App: React.FC = () => (

   <Router>
    <nav>
      <ul>
        <li>
          <Link to="/">LandingPage</Link>
        </li>
        <li>
          <Link to="/FilmDetails">FilmDetails</Link>
        </li>
        <li>
          <Link to="/PickSeats">PickSeats</Link>
        </li>
         <li>
          <Link to="/Checkout">Checkout</Link>
        </li>
         <li>
          <Link to="/Ticket">Ticket</Link>
        </li>
         <li>
          <Link to="/NotFound">NotFound</Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/FilmDetails/:FilmId" element={<FilmDetails />} />
      <Route path="/PickSeats/:ShowingId" element={<PickSeats />} />
      <Route path="/Checkout" element={<Checkout />} />
       <Route path="/Ticket" element={<Ticket />} />
       <Route path="*" element={<NotFound />} />
      
    </Routes>
  </Router>
)
//   const [count, setCount] = useState(0)
//   const currentYear = new Date().getFullYear();

//   return (
//     <>
//     {/* <div>       
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//       </div>
//       <div><p>Movietime</p>
//       <p>Movie1</p>
//       <p>Movie2</p>
//       <p>Movie3</p>
//       <p>Movie4</p>  
//       </div>
//       <header><nav>TEST</nav></header>
                
      
//           <Routes>
//             <Route path="/" element={<LandingPage />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="*" element={<UserProfile />} />
//           </Routes>
       
      
//       <footer>
//         <p>&copy; {currentYear} AlixReactDemo. All rights reserved.</p>
//       </footer> */}
//     </>
    
//   )
// }



export default App
