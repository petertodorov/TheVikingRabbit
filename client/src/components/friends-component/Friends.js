import React from 'react';
import './Friends.css'
import MoviesContainer from './MoviesContainer.js'
import FriendsContainer from './FriendsContainer.js'

import moviesProvider from './data-providers/moviesProvider'
import friendsProvider from './data-providers/friendsProvider';

class Friends extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: undefined,
            friendsData: undefined,
            friendsImages:undefined,
            showFriends: false,
            showMovies: false
        }
        this.getMovies = this.getMovies.bind(this)
        this.getFriends = this.getFriends.bind(this)
        this.getMovieByName = this.getMovieByName.bind(this)
    }

    controlButtonsContentVisibility(e) {
        let friendsContainer = document.getElementsByClassName('friends-container-wrapper')[0]
        let buttonsContainer = document.getElementsByClassName('friends-buttons-container')[0]  
        friendsContainer.style.display = 'flex'
        buttonsContainer.classList.add('shorten-buttons-container')
       
    }
    async getMovieByName(movieSelector) {
        let data = await moviesProvider(movieSelector)
        this.setState({ data: data, showMovies: true, showFriends: false })
    }


    async getMovies(e) {
        let data = await moviesProvider()
        this.setState({ data: data, showMovies: true, showFriends: false })
        this.controlButtonsContentVisibility(e)
    }

    async getFriendsImages(){
        try {
            let result = await fetch("http://localhost:9000/friendsImages")
            let allFriendsImages = await result.json()
            return allFriendsImages
        } catch (error) {
            console.log(error, '===> Error when Fetchning')
        }
    }
    

    async getFriends(e) {
        let friendsData = await friendsProvider()
        let friendsImages = await this.getFriendsImages()
        this.setState({ friendsData: friendsData,friendsImages, showFriends: true, showMovies: false })
        this.controlButtonsContentVisibility(e)
    }
    async componentDidMount() {

    }
    render() {
        let container
        if (this.state.showMovies) {
            container = <MoviesContainer data={this.state.data} getMovieByName={this.getMovieByName} />
        }
        if (this.state.showFriends) {
            container = <FriendsContainer class="friends-container" friendsData={this.state.friendsData} friendsImages={this.state.friendsImages} />
        }
        return (
            <main className="main">
                <section className="friends-buttons-container">
                    <button className="friends-buttons movie-button" onClick={this.getMovies}>Movies</button>
                    <button className="friends-buttons friend-button" onClick={this.getFriends}>Friends</button>
                </section>

                <section className="friends-container-wrapper">{container}</section>
            </main>
        );
    }
}
export default Friends