import Footer from "../componants/Footer";
import Header from "../componants/Header";
import { Link } from "react-router-dom";

const Players = () => {
  const players= [
    {id:1, name:"Lionel Messi",position:"Forward"},
  {id:2, name:"Christiano Ronaldo",position:"Forward"},
  {id:3, name:"Neymar Jr",position:"Forward"},
  ]

  return (
    <>
      <Header />
      <main className="container mt-3">
        <h1>List if Players</h1>
        <ul className="list-group">
          {players.map((player) => (
            <li key={player.id} className="list-group-item">
              <strong>{player.name}</strong>
              <p>{player.position}</p>
              <Link to={`/players/${player.id}`} className="btn btn-primary">View Details</Link>
            </li>
       // path:'players/:playerId'
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
};

export default Players;
