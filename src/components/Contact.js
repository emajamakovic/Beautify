import React from "react";
import {  FaHeart } from "react-icons/fa";
import {Link} from 'react-router-dom'

export default function Contact(props) {

    let image=props.imginactive
    const [img, setImg] = React.useState({image});


    function onImgOver(){
        setImg (prevImg => ({
            image: props.imgactive
        }))
    }

    function onImgOut(){
        setImg(prevImg => ({
            image:props.imginactive
        }))
    }

   
    /*
        let displayText 
        if (props.openSpots ===0) {
            displayText= "SOLD OUT"
        } else if (props.location === "online") {
            displayText= "ONLINE"
        }

        //if there is displayText
        {displayText && <div className="status">{displayText}</div>}
            */

    return (
    <div className="contact-cards" onMouseOver={onImgOver} onMouseOut={onImgOut}>
        <div className="contact-info">
            <img className="image-card-inactive"src={img.image} />
        </div>
        <Link className="contact-name" to={`/products/${props.id}`}>{props.name}</Link>
        <p className="contact-prise"> {props.price/100 + ' $'}</p>
        {props.stock ===0 && <div className="status">SOLD OUT</div>}
    </div>
    )
}