import Footer from "../components/Footer";
import "./ActoSentido.css"
import React from 'react';
import gif from "../assets/gif/violeta actosentido.gif"
// import Modal from '../components/Modal'

const ActoSentido = () => {
    return(
        <>
            <h1>ACTOSENTIDO_</h1>
            {/* <Modal/> */}

<audio src="{cuña}"></audio> 
           <img className="gifperson" src={gif}/>
            <Footer/>
        </>
    )
};

export default ActoSentido