import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function NavBar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg  navbar-${props.bg} bg-${props.bg}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/upper">Uppercase</Link>
          
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/lower">Lower Case</Link>
        </li>
      </ul>
      <div className={`form-check form-switch text-${props.bg==='light' ? 'dark':'light'}`}>
        <input className="form-check-input" type="checkbox" onClick={props.toggle} role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlForfor="flexSwitchCheckDefault">Enable Dark Mode</label>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}
NavBar.propTypes = {
  title : PropTypes.string.isRequired
}

NavBar.defaultProps = {
  title : "Welcome"
} 