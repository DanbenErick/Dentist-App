import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  
  return (
    <nav className="uk-container uk-navbar-container" uk-navbar="">
      <div className="uk-navbar-left">
        <ul className="uk-navbar-nav">
          <li className={"uk-active"}><Link to="/citas-pendientes">Citas Pendientes</Link></li>
          <li className={"uk-active"}><Link to="/citas-atendidas">Citas Atendidas</Link></li>
          <li className={"uk-active"}><Link to="/citas-canceladas">Citas Canceladas</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default React.memo(Nav)