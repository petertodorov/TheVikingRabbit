import { Link } from 'react-router-dom';
import React from 'react';

import './Landing.css';

import runes from './../../images/runes.jpeg';
import greenBlob from './../../images/blob.svg';
import violetBLob from './../../images/blob-violet.svg';

function Landing() {
    return (
        <main className='main'>
            <div className="general-title-image-container">
                <img src={runes} alt="The Viking Rabbit" />
                <h1 className="general-title">The Viking Rabbit</h1>
            </div>

            <section className="elements-container">

                <div className="rabbit-element-box">
                    <img className="blob" src={greenBlob} alt="blob-green" />
                    <Link to="/rabbit" className="rabbit-element-content" >The Rabbit</Link>
                </div>

                <div className="rabbit-element-box">
                    <img className="blob" src={violetBLob} alt="blob violet" />
                    <Link to="/leshica" className="rabbit-element-content" >The Leshica</Link>
                </div>

                <div className="rabbit-element-box">
                    <img className="blob" src={greenBlob} alt="blob green" />
                    <Link to="/swording" className="rabbit-element-content" >The Swords</Link>
                </div>

                <div className="rabbit-element-box">
                    <img className="blob" src={violetBLob} alt="blob violet" />
                    <Link to="/friends" className="rabbit-element-content" >Movies, Friends and Carrots</Link>
                </div>
            </section>
        </main>
    );
}

export default Landing;
