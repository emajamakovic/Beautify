import React from "react";
import { IoStarSharp } from "react-icons/io5";

export default function Reviews(props) {

    let starIcon
    if (props.stars ==="five"){
        starIcon= <div className="review_stars"><IoStarSharp/> <IoStarSharp/> <IoStarSharp/> <IoStarSharp/> <IoStarSharp/> </div>
    } else if( props.stars === "four") {
        starIcon= <div className="review_stars"><IoStarSharp/> <IoStarSharp/> <IoStarSharp/> <IoStarSharp/> </div>
    }

    return (
        <div className="review">
            <h3 className="review_name">{props.name}</h3>
            {starIcon}
            <small className="review_description">{props.description}</small>
        </div>

    )
}