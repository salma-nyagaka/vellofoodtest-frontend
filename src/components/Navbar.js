import React, { Component } from 'react'
import '../assets/styles/landingpage.css'
import logo from '../assets/images/logo2.png'
import { Link } from 'react-router-dom';


class Navbar  extends Component {
    constructor(props) {
        super(props)
        this.state = {
            color: 'rgba(0, 0, 0, 0.2)'
        }
    }


  listenScrollEvent = e => {
    if (window.scrollY > 400) {
      this.setState({color: '#78cfcf'})
    } else {
      this.setState({color: 'rgba(0, 0, 0, 0.2)'})
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }

    render(){
    return (
        <div>
            <nav style={{background: this.state.color}}>
                <div className="nav-wrapper">
                    <Link to="/">
                    <img src={logo} className='logo' alt='logo' />
                    </Link>
                    <ul className="navbar headers">
                        <li className="navbar-content navbar-dropdown">Home
                            <i class="fa fa-angle-down"></i>
                            <ul className="list">
                                <li className="dropdownmenu"><a>Home Video Background</a></li>
                                <li className="dropdownmenu"><a>Home Static Image</a></li>
                                <li className="dropdownmenu"><a >Home Text Rotator</a></li>
                                <li className="dropdownmenu"><a>Home Layer Slider</a></li>
                                <li className="dropdownmenu"><a>Home Cookie Bar Slider</a></li>
                                <li className="dropdownmenu"><a>Home Mobile synthetic</a></li>
                                <li className="dropdownmenu"><a>Top Menu version 2</a></li>
                            </ul>
                        </li>
                        <li className="navbar-content navbar-dropdown">Restaurants
                            <i class="fa fa-angle-down"></i>
                            <ul className="list">
                                <li className="dropdownmenu"><a>Home Static Image</a></li>
                                <li className="dropdownmenu"><a >Home Text Rotator</a></li>
                                <li className="dropdownmenu"><a>Home Layer Slider</a></li>
                                <li className="dropdownmenu"><a>Home Cookie Bar Slider</a></li>
                                <li className="dropdownmenu"><a>Home Mobile synthetic</a></li>
                                <li className="dropdownmenu"><a>Top Menu version 2</a></li>
                            </ul>
                        </li>
                        <li className="navbar-content">About us</li>
                        <li className="navbar-content">Faq</li>
                        <li className="navbar-content navbar-dropdown">Pages
                            <i class="fa fa-angle-down"></i>
                            <ul className="list">
                            <li className="dropdownmenu"><a>Home Static Image</a></li>
                                <li className="dropdownmenu"><a >Home Text Rotator</a></li>
                                <li className="dropdownmenu"><a>Home Layer Slider</a></li>
                                <li className="dropdownmenu"><a>Home Cookie Bar Slider</a></li>
                                <li className="dropdownmenu"><a>Home Mobile synthetic</a></li>
                                <li className="dropdownmenu"><a>Top Menu version 2</a></li>
                            </ul></li>
                        <li className="navbar-content">Login</li>
                    </ul>
                </div>
            </nav>

        </div>
    )

}}

export default Navbar
