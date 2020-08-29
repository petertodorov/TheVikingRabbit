import React from 'react'
import { NavLink } from 'react-router-dom';
import './HeaderNavigation.css'


class HeaderNavigation extends React.Component {

    render() {
        return (
            <nav className={"header-navigation" + this.props.classProp}>
                <div className="header-buttons-list">
                    <NavLink to='/heroes' className="button-list-item" activeClassName="current-nav-link-active">The Heroes</NavLink>
                    <NavLink to='/storry' className="button-list-item" activeClassName="current-nav-link-active">The Storry</NavLink>
                </div>

            </nav>
        );
    }

}
export default HeaderNavigation;