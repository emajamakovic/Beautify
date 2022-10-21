import React from "react";

export default function BeautyTips(props) {
    return (
        <div className="beautytip">
            <img className="beauty_image" src={props.img}/>
            <h2 className="beauty_title">{props.title}</h2>
        </div>
    )
}