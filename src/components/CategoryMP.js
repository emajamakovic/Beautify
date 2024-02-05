import React from "react";
import { FaMagic } from "react-icons/fa";
import { RiEyeCloseLine } from "react-icons/ri";
import { GiEyelashes } from "react-icons/gi";
import { GiLipstick } from "react-icons/gi";
import {Link} from 'react-router-dom'
import "../styles/CategoryMP.css";


export default function CategoryMP(props) {

let categoryIcon

if(props.icon ==="FaMagic"){
    categoryIcon=<div><FaMagic className="category-icon"/></div>
}else if (props.icon === "GiEyelashes") {
    categoryIcon=<div><GiEyelashes className="category-icon"/></div>
}else if(props.icon=== "RiEyeCloseLine") {
    categoryIcon=<div><RiEyeCloseLine className="category-icon"/></div>
}else if (props.icon === "GiLipstick") {
    categoryIcon =<div><GiLipstick className="category-icon"/></div>
}

    return (
        <Link className="categorymp" to={`${props.category}`}>
        <div>
           <p className="categorymp-icon">{categoryIcon}</p>
           <p className="category-name">{props.category}</p>
           <p className="category-description">{props.description}</p> 
        </div>
        </Link>
    )
}