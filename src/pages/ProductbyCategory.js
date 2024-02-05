import React, { useEffect } from "react";
import {useParams} from 'react-router-dom'
import Contact from "../components/Product";
import GoToTop from "../components/GoToTop";
import { db } from "../firebase-config";
import {collection, getDocs} from "@firebase/firestore"


export default function ContactbyCategory() {
    const [products, setProductsValue]= React.useState([]);
    const ProductCollectionRef=collection(db, "products");
    const { category } = useParams();

    useEffect(() => {
        const getProducts = async()=> {
        const data=await getDocs(ProductCollectionRef);
        setProductsValue(data.docs.map((doc) => ({...doc.data(), id: doc.id}))) };
        getProducts();
    }, []);


    const productscomponent=products.filter(product => String(product.category) === category).map(product => {
        return(
            <Contact
            key={product.id}
            {...product}
            />
        )
    })

    return (
        <div className="contacts">
            {productscomponent}
            <GoToTop/>
        </div>
    )
}