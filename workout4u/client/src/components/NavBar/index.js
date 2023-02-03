import { Link } from "react-router-dom"


const NavBar = ()=>{


    return (
        <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <a className="navbar-brand"><span style={{fontSize: 30}}>GETUP</span><br></br><span style={{fontSize:20, paddingLeft:18}}>fitness</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
  
        <Link to={'/signup'} className="nav-link">SignUp</Link>
        <Link to={'/login'} className="nav-link">Login</Link>
      </div>
    </div>
  </div>
</nav>
    )

   
}

export default NavBar