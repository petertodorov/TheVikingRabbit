import React from 'react'
import { Link } from 'react-router-dom';

import './Footer.css'

function Footer() {
    return (
        <footer className ="site-footer">
            <Link to='/'><p>Impressum</p></Link>
            <Link to='/'>Other Viking Rabbits</Link>
        </footer>
    );
}
export default Footer;