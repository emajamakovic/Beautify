import React from "react";
import { FaMagic } from "react-icons/fa";
import { RiEyeCloseLine } from "react-icons/ri";
import { GiEyelashes } from "react-icons/gi";
import { GiLipstick } from "react-icons/gi";
import {Link} from 'react-router-dom'


export default function CategoryMP(props) {

let categoryIcon

if(props.icon ==="FaMagic"){
    categoryIcon=<div><FaMagic className="category_icon"/></div>
}else if (props.icon === "GiEyelashes") {
    categoryIcon=<div><GiEyelashes className="category_icon"/></div>
}else if(props.icon=== "RiEyeCloseLine") {
    categoryIcon=<div><RiEyeCloseLine className="category_icon"/></div>
}else if (props.icon === "GiLipstick") {
    categoryIcon =<div><GiLipstick className="category_icon"/></div>
}

    return (
        <Link className="categorymp" to={`${props.category}`}>
        <div>
            <p className="categorymp_icon">{categoryIcon}</p>
           <p className="category_name">{props.category}</p>
           <p className="category_description">{props.description}</p> 
        </div>
        </Link>
    )
}