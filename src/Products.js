import React from "react";
import Contact from "./components/Contact";
import ContactsInfo from "./components/ContactsInfo";

export default function Products() {

    const contacts=ContactsInfo.map(contact => {
        return(
            <Contact
            key={contact.id}
            {...contact}
            />
        )
    })

    return (<div>
        <div className="contacts">
            {contacts}
        </div>
        <div className="divider70">
        </div>
        </div>
    )
}