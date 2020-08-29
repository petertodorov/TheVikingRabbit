import React from 'react';

import './Leshica.css';
import leshicaImg from './../../images/leshica.jpg';
import RoundImage from '../partials/RoundImage';
import helpSound from '../../assets/audio/help.mp3'

class Leshica extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            age: 0,
            timer: '',
            showStopRotate: false,
            classRotate: '',
            helpSoud: '',
            muteSoundCLass: ''
        }
        this.handleClick = this.handleClick.bind(this)
        this.stopTime = this.stopTime.bind(this)
        this.stopRotation = this.stopRotation.bind(this)
        this.muteSound = this.muteSound.bind(this)
    }
    muteSound(e) {
        if (!e.currentTarget.classList.contains('muted-sound')) {
            this.setState({
                muteSoundCLass: ' muted-sound'
            })
            this.createAudio().muted = true
        } else {
            this.setState({
                muteSoundCLass: ''
            })
            this.createAudio().muted = false
        }
    }

    createAudio() {
        return document.getElementById("audio");
    }

    handleClick(e) {
        this.setState({
            showStopRotate: true, classRotate: 'circle',
        })
        this.createAudio().loop = true;
        this.createAudio().play();
    }
    stopTime() {
        clearInterval(this.state.timer)
        this.setState({
            done: 'done'
        })
    }
    stopRotation() {
        this.setState({
            showStopRotate: false,
            classRotate: 'circle-paused'
        })
        this.createAudio().pause();
    }

    componentDidMount() {
        let counter = this.state.age
        let timer = setInterval(() => {
            this.setState({
                age: counter += 1,
            })
            if (counter >= 60) {
                this.setState({
                    done: 'done'
                })
                clearInterval(this.state.timer)
            }
        }, 1000)
        this.setState({ timer: timer })
    }

    componentWillUnmount() {
        clearInterval(this.state.timer)
    }

    render() {
        let showStopRotate = this.state.showStopRotate
        let classRotate = this.state.classRotate
        let mutedSoundClass = this.state.muteSoundCLass
        let counter = this.state.age
        let name = this.state.name
        let done = this.state.done
        let button;
        if (showStopRotate) {
            button = <button onClick={this.stopRotation}>
                <h2>Getting Dizzy!!!</h2>
            </button>
        }else{
          
        }
        return (
            <main className='main'>
                <h2>The Leshica</h2>
                <section>
                    <p>I will be the story of the Leshica </p>
                    <h3>Name: {name}</h3>
                    <h3>Time you are wondering what this is all about: {counter}</h3>
                    <button onClick={this.stopTime}>Stop it!</button>
                    <span> {done}</span>
                </section>

                <section className="pic-wrapper">
                    <RoundImage
                        imageSrc={leshicaImg}
                        classRotate={classRotate}
                        clickHandler={this.handleClick} />
                </section>
                <section className="sound-help-button-container">
                    <svg aria-hidden="true" onClick={this.muteSound} focusable="true" data-prefix="fas" data-icon="volume-up" className={"svg-inline--fa fa-volume-up fa-w-18" + mutedSoundClass} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zm233.32-51.08c-11.17-7.33-26.18-4.24-33.51 6.95-7.34 11.17-4.22 26.18 6.95 33.51 66.27 43.49 105.82 116.6 105.82 195.58 0 78.98-39.55 152.09-105.82 195.58-11.17 7.32-14.29 22.34-6.95 33.5 7.04 10.71 21.93 14.56 33.51 6.95C528.27 439.58 576 351.33 576 256S528.27 72.43 448.35 19.97zM480 256c0-63.53-32.06-121.94-85.77-156.24-11.19-7.14-26.03-3.82-33.12 7.46s-3.78 26.21 7.41 33.36C408.27 165.97 432 209.11 432 256s-23.73 90.03-63.48 115.42c-11.19 7.14-14.5 22.07-7.41 33.36 6.51 10.36 21.12 15.14 33.12 7.46C447.94 377.94 480 319.54 480 256zm-141.77-76.87c-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61C327.98 228.28 336 241.63 336 256c0 14.38-8.02 27.72-20.92 34.81-11.61 6.41-15.84 21-9.45 32.61 6.43 11.66 21.05 15.8 32.61 9.45 28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.86z"></path></svg>
                    <div className="stop-rotate-button-container">
                        {button}
                    </div>
                </section>
                <audio id="audio" src={helpSound}></audio>
            </main>
        );
    }
}
export default Leshica