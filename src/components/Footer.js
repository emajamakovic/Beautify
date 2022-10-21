import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { FaMap } from "react-icons/fa";
import { FaCity } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";


export default function Footer() {
    return (
        <div className="footer">
            <div className="footer_firstpart">
                <div className="footer_info">
                <h3 className="footer_info_companyname">Beautify</h3>
                <p><FaHeart className="react_icons_footer"/>Unimpressed and distressed by the too-serious-state of the cosmetics industry, we longed to start a company that brought back unapologetic glamour and femininity. Inspired by a love of Paris, unabashed girliness and the transformative power of cosmetics, we created Beautify, a boutique brand with big dreams.</p>
                </div>
                <div className="footer_maps">
                <iframe className="footer_maps_frame"
                src="https://maps.google.com/maps?q=Sarajevo,%20Ba%C5%A1%C4%8Dar%C5%A1ija&t=&z=13&ie=UTF8&iwloc=&output=embed"
                ></iframe>
                </div>
                <div className="footer_contact">
                    <h3>Contact</h3>
                    <p><FaMapMarkerAlt className="react_icons_footer"/>Francuske Revolucije BB</p>
                    <p><FaPhoneAlt className="react_icons_footer"/>+38761 000 000</p>
                    <p><FaMailBulk className="react_icons_footer"/>beautify@gmail.com</p>
                    <p><FaMap className="react_icons_footer"/>Bosnia and Herzegovina</p>
                    <p><FaCity className="react_icons_footer"/>Sarajevo</p>
                </div>
            </div>
            <div className="footer_end">© EMA Team, All Right Reserved. Designed By EMA Team. Distributed By EMA Team</div>
        </div>

    )
}