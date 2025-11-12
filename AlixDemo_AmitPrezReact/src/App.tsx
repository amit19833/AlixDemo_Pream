import { Route, Routes, Link, useParams } from "react-router-dom";
import "./App.css";
import { Tickets } from "./Tickets";
import { LandingPage } from "./Landing";
import { PickSeats } from "./PickSeats";
import { FourOhFour } from "./FourOhFour";
import { FilmDetails } from "./FilmDetails";

function App() {

  //const showingId  = useParams(showingId:number)

  return (
    <>
      <header>
        <Nav />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/films/:filmId" element={<FilmDetails />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/pickseats/:showingId" element={<PickSeats />} />
          <Route path="*" element={<FourOhFour />} />
        </Routes>
      </header>
    </>
  );
}

function Nav() {
  const user = {
    id: 1,
    username: "admin",
    password: "pass",
    first: "Administrative",
    last: "User",
    phone: "(555) 943-2230",
    email: "admin@daam.com",
    imageUrl: "https://randomuser.me/api/portraits/women/70.jpg",
    creditCard: {
      pan: "",
      expiryMonth: 6,
      expiryYear: 2025,
    },
    adminUser: true,
    isServer: false,
  };

  return (
    <div className="appNavigation">
      <span>
        <Link to="/">Home</Link>
      </span>
      <span>
        <Link to="/Films/12345">Films</Link>
      </span>
      <span>
        <Link to="/tickets">Tickets</Link>
      </span>
      <span>
        <Link to="/pickseats/12345">Pick Seats</Link>
      </span>

      {user ? (
        <span>
          <span>
            <Link to="/Account">Account</Link>
          </span>
          <span>
            <Link to="/logout">Logout</Link>
          </span>
          <span>
            <Link to="/cart">Cart</Link>
          </span>
        </span>
      ) : (
        <span>
          <span>
            <Link to="/register">Register</Link>
          </span>
          <span>
            <Link to="/login">Login</Link>
          </span>
        </span>
      )}
    </div>
  );
}

export default App;