//import { ReactComponent } from '*.svg';
import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class Navbar extends Component{

    state={clicked: false}

    handleClick=()=>{
      this.setState({clicked: !this.state.clicked});
    }
    render() {

    return (
      <>
      <div className="container-fluid nav_bg">
      <nav className="navbar-items navbar-expand-xl navbar-dark ">
      <h1 className="navbar-logo">AtEase<i className="fab fa-react"/></h1>
      <div className="menu-icon" onClick={this.handleClick}>
        <i className={this.state.clicked? 'fas fa-times': 'fas fa-bars'}/>
      </div>

      <div>
      <ul className={this.state.clicked?"nav-menu active": "nav-menu"}>
        <li className="nav-item active">
          <NavLink exact activeClassName="menu_active" className="nav-link" to="/">Home <span class="sr-only">(current)</span></NavLink>
        </li>
        
      </ul>
      </div>
      <div className="nav-items">
      <ul className={this.state.clicked?"nav-menu active": "nav-menu"}>
        <li className="nav-item ">
          <NavLink activeClassName="menu_active" className="nav-link" to="/EmpReg">Register as Worker</NavLink>
        </li>
        <li className="nav-item">
          <NavLink  activeClassName="menu_active" className="nav-link" to="/CustLogin">Login As Customer</NavLink>
        </li>
        
      </ul>
      </div>
    
  </nav>
</div>

</>
  );
}
}
export default Navbar;
