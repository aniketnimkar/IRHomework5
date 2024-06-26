import {NavLink} from 'react-router-dom'


const Header = () => {
  return(
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Company Logo</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
              <NavLink className="nav-link" aria-current="page" to="/players">Players</NavLink>
              <NavLink className="nav-link" aria-current="page" to="/report">Report</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header


