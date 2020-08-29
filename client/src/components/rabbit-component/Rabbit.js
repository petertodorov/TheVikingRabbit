
import React from 'react'
import RabbitStoryContainer from './RabbitStoryContainer.js'
import moviesProvider from '../friends-component/data-providers/moviesProvider'

import './Rabbit.css'
import rabbitImg from '../../images/viking_rabbit.png'

class Rabbit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rabbitOpacity: '0',
            spaceHolder: 'Click me',
            stories: [],
            storiesAreLoaded: false,
        }
    }

    async componentDidMount() {
        this._rabbitImgDom.style.opacity = this.state.rabbitOpacity

        this._rabbitImgDom.addEventListener('click', () => {
            if (this._rabbitImgDom.style.opacity === '0') {
                this._clickMeButton.style.opacity = this.state.rabbitOpacity
                this.setState({
                    rabbitOpacity: '1'
                })
                this._rabbitImgDom.style.opacity = this.state.rabbitOpacity
            } else {
                this._clickMeButton.style.opacity = this.state.rabbitOpacity
                this.setState({
                    rabbitOpacity: '0'
                })
                this._rabbitImgDom.style.opacity = this.state.rabbitOpacity
            }
        })

        let movies = await moviesProvider();
        if (movies) {
            this.setState({ stories: movies,
            storiesAreLoaded:true })
        }
    }

    render() {
        let rabbitStoriesComp
        if (this.state.stories.length) {
            rabbitStoriesComp = this.state.stories.map((story) => {
    let               keyGen= Math.random()*10
                return (
                    <RabbitStoryContainer key = {keyGen} story={story} />
                );
            })
        }
        return (
            <main className='main'>
                <h2>The Rabbit</h2>
                <section>
                    <p>
                        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                    </p>
                </section>
                <section className="pic-wrapper">
                    <div className="mask">
                        <div className="pic-container">
                            <div className="click-me" ref={(el) => this._clickMeButton = el}>
                                Summon Me
                            </div>

                            <img src={rabbitImg} ref={
                                (el) => this._rabbitImgDom = el} />
                        </div>
                    </div>
                </section>
                <section className="bio-container">
                    <p className="story-para">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate veniam facilis nesciunt ipsam sed, cumque, recusandae adipisci odit sit aperiam laudantium hic quod quia odio ipsa totam velit debitis?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate veniam facilis nesciunt ipsam sed, cumque, recusandae adipisci odit sit aperiam laudantium hic quod quia odio ipsa totam velit debitis?
                    </p>
                    <blockquote cite="https://www.poetryfoundation.org/poems/42916/jabberwocky">
                        ’Twas brillig, and the slithy toves
                        Did gyre and gimble in the wabe:
                        All mimsy were the borogoves,
                        And the mome raths outgrabe.

                        “Beware the Jabberwock, my son!
                        The jaws that bite, the claws that catch!
                        Beware the Jubjub bird, and shun
                        The frumious Bandersnatch!”
                        <footer className='blockquote-footer'>Lewis Carrol</footer>
                    </blockquote>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, repellat praesentium saepe in officia non incidunt amet dolore quo adipisci vitae eos itaque ducimus neque a aspernatur architecto deserunt at!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, repellat praesentium saepe in officia non incidunt amet dolore quo adipisci vitae eos itaque ducimus neque a aspernatur architecto deserunt at!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, repellat praesentium saepe in officia non incidunt amet dolore quo adipisci vitae eos itaque ducimus neque a aspernatur architecto deserunt at!
                </p>
                </section>
                <article className="stories-main-container">
                    <h2 className='stories-title'>The Rabbit Stories</h2>
                    <div  className="rabbit-stories-wrapper">
                        {rabbitStoriesComp}
                    </div>
                    
                </article>
            </main>
        );
    }
}

export default Rabbit;