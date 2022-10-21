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

    let heartIcon
    if (props.favourite === 3) {
        heartIcon= <div><FaHeart className="heart"/><FaHeart className="heart"/><FaHeart/></div>
    } else if (props.favourite === 4) {
        heartIcon= <div><FaHeart className="heart"/><FaHeart className="heart"/><FaHeart className="heart"/><FaHeart/></div>
    } else if (props.favourite === 5){
        heartIcon= <div><FaHeart className="heart"/><FaHeart className="heart"/><FaHeart className="heart"/><FaHeart className="heart"/><FaHeart className="heart"/></div>
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
        <div className="contact_info">
            {props.stock ===0 && <div className="status">SOLD OUT</div>}
            <img className="image_card-inactive"src={img.image} />
        </div>
        <Link className="contact_name" to={`/products/${props.id}`}>{props.name}</Link>
        <p className="contact_prise"> {props.price + ' $'}</p>
        <p className="contact-hearticon">{heartIcon}</p>
    </div>
    )
}