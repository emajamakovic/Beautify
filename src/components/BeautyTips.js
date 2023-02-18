import React from "react";

export default function BeautyTips(props) {
    return (
        <div className="beautytip">
            <a href={props.url}>
            <img className="beauty_image" src={props.img}/>
            <h2 className="beauty_title">{props.title}</h2>
            </a>
        </div>
    )
}