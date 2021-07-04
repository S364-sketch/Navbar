
import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import './Navbar.css';
import {Button} from '../Button';

class Navbar extends Component {
    state={clicked:true}
    handleClick=()=>{
        this.setState({clicked: !this.state.clicked})
    }
    render(){
    return (
        <>
            <nav className="NavbarItem">
                <h1 className='navbar-logo'>React
                <i class="fab fa-reacteurope"></i>
                </h1>
                <div className="menu-icon" onClick={this.handleClick}>
                <i className={this.state.clicked ? 'fas fa-bars' : 'fas fa-times'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu' :'nav-menu active'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <Button>Sign up</Button>
            </nav>
        </>
    )
                }
}
export default Navbar;
