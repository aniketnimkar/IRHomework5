import './App.css'
import Footer from './componants/Footer'
import Header from './componants/Header'
import {NavLink} from 'react-router-dom'

export default function App() {
  return (
    <>
      <Header/>
    <main className="container mt-5">
      <img src="https://placehold.co/400x300?text=Employees+Smiling" />
      <section className='mt-5'>
        <h1>Our Players</h1>
        <p>Meet our talented team of players who work hard to achive success on the field.</p>
        <NavLink to="/players" className="btn btn-primary">View Players</NavLink>
      </section>
      <section className='mt-5'>
        <h1>Team Performance</h1>
        <p>Explore our thems performance statics to gain insights into our success on the field.</p>
         <NavLink to="/report" className="btn btn-primary">View Performance</NavLink>
      </section>
    </main>
      <Footer/>
    </>
  )
}
