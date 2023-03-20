import React from "react";
import { useLocation } from 'react-router-dom';
import { useCart } from "react-use-cart";
import { TfiPackage } from "react-icons/tfi";
import { Checkbox } from "@mui/material";
import { BsCashStack } from "react-icons/bs";
import { db } from "../firebase-config";
import {collection, addDoc} from "@firebase/firestore"

export default function Order() {

    const location = useLocation();
    const items = location.state;
    
    const{
        cartTotal
      } = useCart();

    const orderedItems=items.map((item) => ({name:item.name, id:item.id, quantity:item.quantity}));
    const orderAmount=cartTotal/100;
    const[name, setName]=React.useState("");
    const[surname, setSurname]=React.useState("");
    const[email, setEmail]=React.useState("");
    const[telephone, setTelephone]=React.useState();
    const[city, setCity]=React.useState("");
    const[zipcode, setZipCode]=React.useState("");
    const[address, setAddress]=React.useState("");
    const[county, setCountry]=React.useState("");
    const OrderCollectionRef=collection(db, "orders");
    const [checkedDelivery, setCheckedDelivery] = React.useState(false);
    const [checkedPayment, setCheckedPayment] = React.useState(false);


    const checkeDelivery = (event) => {
        setCheckedDelivery(event.target.checked);
    };

    const checkePayment=(event) => {
        setCheckedPayment(event.target.checked);
    };
   
    const addOrder= async()=> {
        await addDoc(OrderCollectionRef, {customer_name:name, customer_surname:surname, email:email, telephone:telephone, city:city, zipcode:zipcode,
            address:address, country:county, orderedItems:orderedItems, orderAmount:orderAmount})}

    return (
        <section className="container">
            <h2 className="df-jc">MY ORDER</h2>
            <div className="order">
            <div className="customer">
                <label>
                    Name
                    <input type="text" onChange={(e)=>setName(e.target.value)}/>
                </label>
                <label>
                    Surname
                    <input type="text" onChange={(e)=>setSurname(e.target.value)}/>
                </label>
                <label>
                    Email
                    <input type="email" onChange={(e)=> setEmail(e.target.value)} />
                </label>
                <label>
                    Telephone
                    <input type="tel" onChange={(e)=> setTelephone(e.target.value)}/>
                </label>
                <label>
                    City
                    <input type="text" onChange={(e)=> setCity(e.target.value)}/>
                </label>
                <label>
                    Zip code
                    <input type="text" onChange={(e)=> setZipCode(e.target.value)}/>
                </label>
                <label>
                    Address
                    <input type="text" onChange={(e)=> setAddress(e.target.value)}/>
                </label>
                <label>
                    Country
                    <input type="text" onChange={(e)=> setCountry(e.target.value)}/>
                </label>
            </div>
        <div className="items">
            {items.map((item) => (
                <div className="item" key={item.id}>
                    <img  src={item.imginactive} alt={item.name} />
                    <div className="o-description">
                        <p>{item.name}</p>
                        <div className="o-details">
                        <p style={{paddingRight:140}}>{"x" + item.quantity}</p>
                        <p>{item.quantity* item.price/100 + " $"}</p>
                        </div>
                    </div>
                </div>
            ))}
            
        </div>
        </div>
        <div className="total-amount">
            <a>TOTAL: {orderAmount}$</a>
        </div>

        <div className="delivery">
              <div className="h-delivery">
                <Checkbox checked={checkedDelivery} onChange={checkeDelivery}/>
                <p  className="df-jc" style={{fontSize:50}}><TfiPackage/></p>
                <h4 className="df-jc">HOME DELIVERY</h4>
                <h5 className="df-jc">7.99 $</h5>
              </div> 

              <div className="payment">
              <Checkbox checked={checkedPayment} onChange={checkePayment}/>
                <p  className="df-jc" style={{fontSize:50}}><BsCashStack/></p>
                <h4 className="df-jc">HOME PAYMENT</h4>
              </div>


        </div>
        {checkedDelivery==true && checkedPayment==true ? 
        <div className="df-jc"><button onClick={addOrder} className="ordernow-button">ORDER NOW</button></div> :
        <div className="df-jc"><button style={{backgroundColor:'lightgray'}} className="ordernow-button">ORDER NOW</button></div>
        }
        </section>
    )
}