import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/BestSeller.css";

export default function Bestseller() {
    return (
        <div className="bestseller">
            <div className="bestseller-divider">
                <img className="bestseller-photo" src={'https://static.independent.co.uk/2022/01/12/14/Maybellines%20Sky%20High%20Mascara%20indybest%20copy.jpg?width=1200'} />
            </div>
            <div className="bestseller-divider">
                <h5 className="bestseller-label">BESTSELLER</h5>
                <h1>Lash Sensational Sky High Mascara</h1>
                <p style={{padding:"3px 0 10px 0"}}>Maximum length and staggering volume in one sweep!</p>
                <p>The L’Oréal Paris Lash Paradise mascara perfectly separates your lashes and enhances them without weighing them down – just enjoy the feathery light effect.</p>
                <div className="bestseller-specification">
                    <div className="bestseller-specification-table">
                        <p><FaArrowRight className="bestseller-table-icons"/>Extra Volume</p>
                        <p><FaArrowRight className="bestseller-table-icons"/>Extra Volume</p>
                        <p><FaArrowRight className="bestseller-table-icons"/>Extra Volume</p>
                    </div>
                    <div className="bestseller-specification-table">
                        <p><FaArrowRight className="bestseller-table-icons"/>Extra Volume</p>
                        <p><FaArrowRight className="bestseller-table-icons"/>Extra Volume</p>
                        <p><FaArrowRight className="bestseller-table-icons"/>Extra Volume</p>
                    </div>
                </div>  
                <Link to="/products/EjCbRf688GRqOTADVRF7" className="link">
                    <div className="bestseller-button">SHOP NOW</div>        
                </Link>
             
            </div>

        </div>
    )
}