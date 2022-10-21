import React from "react";
import {  FaHeart } from "react-icons/fa";
import {Link} from 'react-router-dom'
import {useParams} from 'react-router-dom'
import ContactsInfo from "./ContactsInfo";
import Contact from "./Contact";
import GoToTop from "./GoToTop";


export default function ContactbyCategory() {

    const { category } = useParams();

    const contacts=ContactsInfo.filter(contact => String(contact.category) === category).map(contact => {
        return(
            <Contact
            key={contact.id}
            {...contact}
            />
        )
    })

    return (
        <div className="contacts">
            {contacts}
            <GoToTop/>
        </div>
    )
}