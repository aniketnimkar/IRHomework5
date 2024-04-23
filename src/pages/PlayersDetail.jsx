import { useParams } from "react-router-dom";
import Header from "../componants/Header";
import Footer from "../componants/Footer";




const PlayersDetail =() =>{
  const playerId = useParams()
  console.log(playerId)
  const players = [
    {id:1, name:"Lionel Messi", position:"Forward", 
     team:"Paris Saint-Germain"},
  {id:2, name:"Christiano Ronaldo", position:"Forward", 
   team:"Manchester United"},
  {id:3, name:"Neymar Jr", position:"Forward",
   team:"Paris Saint-Germain"}
  ]
  const playerData = players.find(player => player.id == playerId.playerId)

  // console.log(playerData)

  // console.log(paramObj)
  return(
    <>
      <Header/>
      <main className="container">
        <h1>{playerData.name}</h1>
         <ul className='list-group'>
          <li className="list-group-item"><strong>Name:</strong> {playerData.name}</li>
            <li className="list-group-item"><strong>Position:</strong> {playerData.position}</li>
            <li className="list-group-item"><strong>Team:</strong> {playerData.team}</li>
         </ul>
      </main>
    <Footer/>
    </>
  )
}

export default PlayersDetail