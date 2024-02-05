import React from "react";
import { IoStarSharp } from "react-icons/io5";
import "../styles/Review.css";

export default function Reviews(props) {

    let starIcon
    if (props.stars ===5){
        starIcon= <div className="review-stars"><IoStarSharp/> <IoStarSharp/> <IoStarSharp/> <IoStarSharp/> <IoStarSharp/> </div>
    } else if( props.stars === 4) {
        starIcon= <div className="review-stars"><IoStarSharp/> <IoStarSharp/> <IoStarSharp/> <IoStarSharp/> </div>
    }

    return (
        <div className="review">
            <h3 className="review-name">{props.name}</h3>
            {starIcon}
            <small className="review-description">{props.description}</small>
        </div>

    )
}