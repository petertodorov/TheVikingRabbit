import React from 'react'
import ReactDOM from 'react-dom';
import LeshicaComponent from '../../components/leshica-component/Leshica'
import RabbitComponent from '../../components/rabbit-component/Rabbit'

function handleClickMe(e) {
    let componentToRender = {
        RabbitComponent: () => {
            ReactDOM.render(<RabbitComponent />, document.getElementById('hero-container'))
        },
        LeshicaComponent: () => {
            ReactDOM.render(<LeshicaComponent />, document.getElementById('hero-container'))
        },
    }
    componentToRender[e.currentTarget.getAttribute('id')]()
}
export default handleClickMe
