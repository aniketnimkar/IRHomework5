import Footer from "../componants/Footer"
import Header from "../componants/Header"


const Report = () =>{
  return(
    <>
      <Header/>
      <main className="container mt-3">
           <h1>Team Performance Report</h1>
         <div class="container text-center mt-2">
           <hr/>
           <div class="row text-start">
             <div class="col">
               <h2 >Top Scorer</h2>
               <p>Name: Lionel Messi</p>
               <p>Goals Scored: 25</p>
               
             </div>
             <div class="col">
               <h2>Best Assister</h2>
               <p>Name: Naymar jr</p>
               <p>Assists: 15</p>
             </div>
             <div class="col">
               <h2>Most Valuable Player(MVP)</h2>
               <p>Name: Cristiano Ranaldo</p>
               <p>Overall Rating: 9.5</p>
             </div>
           </div>
         </div>
      </main>
      <Footer/>
    </>
  )
} 

export default Report