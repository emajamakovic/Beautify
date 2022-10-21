import React from "react";
import {Link, useParams} from 'react-router-dom'
import ContactsInfo from "./ContactsInfo";
import {  FaHeart } from "react-icons/fa";
import {  FaArrowLeft } from "react-icons/fa";
import GoToTop from "./GoToTop";



export default function SingleContact() {

    const { id } = useParams();
    const singleContact = ContactsInfo.find((contact) => String(contact.id) === id) || {};

    let heartIcon
    if (singleContact.favourite === 3) {
        heartIcon= <div><FaHeart className="heartsmall"/><FaHeart className="heartsmall"/><FaHeart className="heartsmall"/></div>
    } else if (singleContact.favourite === 4) {
        heartIcon= <div><FaHeart className="heartsmall"/><FaHeart className="heartsmall"/><FaHeart className="heartsmall"/><FaHeart className="heartsmall"/></div>
    } else if (singleContact.favourite === 5){
        heartIcon= <div><FaHeart className="heartsmall"/><FaHeart className="heartsmall"/><FaHeart className="heartsmall"/><FaHeart className="heartsmall"/><FaHeart className="heartsmall"/></div>
    }

    return (
        <div className="singlecontact">
            <div className="singleproduct-backbutton">
            <Link className="sp-backbutton" to="/products"><FaArrowLeft style={{fontSize:14, paddingRight:7}}/>Back to products</Link>
            </div>
            <div className="singlecontact-intro">
                <div>
                    <img className="singlecontact-image" src={singleContact.imginactive}/>
                </div>
                <div className="singlecontact-info">
                    <h2 className="singlecontact-name">{singleContact.name}</h2>
                    <p className="singlecontact-description">{singleContact.description}</p>
                    <p className="singlecontact-rating">{heartIcon}({singleContact.favourite})</p>
                    <div className="sc-description-list">
                        <ul className="sc-description-listitems">
                            <li>{singleContact.desc1}</li>
                            <li>{singleContact.desc2}</li>
                            <li>{singleContact.desc3}</li>
                        </ul>
                    </div>
                    <button className="singlecontact-button">BUY NOW</button>
                </div>
            </div>
            <GoToTop/>
        </div>
    )
}
