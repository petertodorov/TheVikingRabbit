import React from 'react';
import './Swording.css';

class Swording extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            swordButtons: [],
            swords: []
        }
        this.handleClickView = this.handleClickView.bind(this)
    }
    handleClickView(button, index) {
        let swordButtons = this.state.swordButtons
        let swords = this.state.swords

        button.addEventListener('click', () => {
            this.cleanActiveStatus(swordButtons, swords)
            button.classList.add('active-sword-button')
            swords[index].classList.add('active-sword')

        })
    }
    cleanActiveStatus(swordButtons, swords) {
        swordButtons.forEach((button, index) => {
            button.classList.remove('active-sword-button')
            swords[index].classList.remove('active-sword')
        })

    }
    componentDidMount() {
        this.setState({
            swordButtons: document.querySelectorAll(".sword-box"),
            swords: document.querySelectorAll(".sword-image"),
        })
    }
    render() {
        this.state.swordButtons.forEach((button, index) => {
            this.handleClickView(button, index)
        })
        return (
            <main className='main swording-style'>
                <div className="swords-wrapper">
                    <h2 className="general-title">Rabbit&apos;s Swords</h2>

                    <section className="swords-container">
                        <button className="sword-box" title="Sword - The Really Long One"><span>Sword &quot;The really long one&quot;</span></button>
                        <button className="sword-box" title="Sword - The Rabbit's Sting"><span>Sword &quot;The Rabbit's Sting&quot;</span></button>
                        <button className="sword-box" title="Sword - The Common One"><span>Sword &quot;The Common one&quot;</span></button>
                        <button className="sword-box" title="Sword - The Secret Magic"><span>Sword &quot;The Secret Magic&quot;</span></button>
                    </section>
                </div>
                <section className="sword-view-container">
                    <h2>Sword Viewer</h2>

                    <div className="sword-view-image-container">
                        <div className="sword-image">SWORD 1</div>
                        <div className="sword-image">SWORD 2</div>
                        <div className="sword-image">SWORD 3</div>
                        <div className="sword-image">SWORD 4</div>
                    </div>
                    <article className="sword-skills-container">
                        <button className="skills">Skill 1</button>
                        <button className="skills">Skill 2</button>
                        <button className="skills">Skill 3</button>
                        <button className="skills">Skill 4</button>
                    </article>
                </section>
            </main>
        );
    }
}

export default Swording