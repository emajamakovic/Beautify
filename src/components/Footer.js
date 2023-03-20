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
            <div className="footer-firstpart">
                <div className="footer-info">
                <h3 className="footer-info-companyname">Beautify</h3>
                <p><FaHeart className="react-icons-footer"/>Unimpressed and distressed by the too-serious-state of the cosmetics industry, we longed to start a company that brought back unapologetic glamour and femininity. Inspired by a love of Paris, unabashed girliness and the transformative power of cosmetics, we created Beautify, a boutique brand with big dreams.</p>
                </div>
                <div className="footer-maps">
                <iframe className="footer-maps-frame"
                src="https://maps.google.com/maps?q=Sarajevo,%20Ba%C5%A1%C4%8Dar%C5%A1ija&t=&z=13&ie=UTF8&iwloc=&output=embed"
                ></iframe>
                </div>
                <div className="footer-contact">
                    <h3>Contact</h3>
                    <p><FaMapMarkerAlt className="react-icons-footer"/>Francuske Revolucije BB</p>
                    <p><FaPhoneAlt className="react-icons-footer"/>+38761 000 000</p>
                    <p><FaMailBulk className="react-icons-footer"/>beautify@gmail.com</p>
                    <p><FaMap className="react-icons-footer"/>Bosnia and Herzegovina</p>
                    <p><FaCity className="react-icons-footer"/>Sarajevo</p>
                </div>
            </div>
            <div className="df-jc">© EMA Team, All Right Reserved. Designed By EMA Team. Distributed By EMA Team</div>
        </div>

    )
}