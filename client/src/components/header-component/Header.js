import React from 'react';
import { Link } from 'react-router-dom';
import HamburgerMenu from '../../../node_modules/react-hamburger-menu/dist/HamburgerMenu'

import './Header.css'

import rabbitImg from './../../images/viking_rabbit.png'
import HeaderNavigation from './HeaderNavigation.js'

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState({
            open: !this.state.open
        });
    }

    render() {
        let menuClicked = this.state.open
        let navCompClass;
        if (menuClicked) {
            navCompClass =' show-nav'
        }else{
            navCompClass =''
        }
        return (
            <header>
                <Link to='/'>
                    <img className="header-img" src={rabbitImg} alt="viking-rabbit" />
                </Link>
                <HamburgerMenu className='hamburger-menu'
                    isOpen={this.state.open}
                    menuClicked={this.handleClick.bind(this)}
                    width={30}
                    height={15}
                    strokeWidth={4}
                    rotate={0}
                    color='lightblue'
                    borderRadius={1}
                    animationDuration={0.5}
                />
                <HeaderNavigation classProp={navCompClass} />
            </header>
        );
    }
}
export default Header