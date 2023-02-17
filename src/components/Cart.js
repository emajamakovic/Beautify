import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useCart } from "react-use-cart";
import { TbTrash } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

export default function Cart({closeModal}){
    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
      } = useCart();


    return (    
        <div className="modal">
            <button className="m-close-button" onClick={closeModal}><AiOutlineClose/></button>
            {isEmpty && <div className="cart-empty">Your cart is empty.</div>}

            <div className="ci-container">
                {isEmpty== false && <h3 className="cart-declare">Cart ({totalUniqueItems})</h3>}

                 {items.map((item) => (
                    <div className="cart-item">
                    <img className="ci-img" src={item.imginactive} alt={item.name}/>

                    <div className="ci-description">
                        <p>{item.name}</p>
                        <div className="ci-options">
                            <a>{item.price/100 + " $"}</a>  
                            <button style={{paddingRight:15, fontSize:19, border:0, background:'white'}} onClick={()=>removeItem(item.id)}><TbTrash/></button>
                        </div>
                        <div style={{display:'flex', alignItems:'center'}} >
                            <button className="ci-quantity-button" 
                            onClick={()=> updateItemQuantity(item.id, item.quantity-1)}>
                                <AiOutlineMinus/></button>
                            <p className="ci-quantity">{item.quantity}</p>
                            <button className="ci-quantity-button" 
                            onClick={() => updateItemQuantity(item.id, item.quantity+1)}> 
                                <AiOutlinePlus/></button>
                        </div>
                    </div>

                    </div>
             ))}

            </div>
      

        </div>

    )
}