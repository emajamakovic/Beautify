import React, { useEffect } from "react";
import Product from "../components/Product";
import { db } from "../firebase-config";
import { collection, getDocs} from "@firebase/firestore"
import "../styles/Products.css";


export default function Products() {
 
    const [products, setProduct]=React.useState([]);
    const ProductCollectionRef=collection(db, "products");
        useEffect(() => {
            const getProducts= async () => {
            const data=await getDocs(ProductCollectionRef);
            setProduct(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
         };
         getProducts();
        }, []);

   
//using firebase
const productcomponent=products.map(product => {
    return(
        <Product
        key={product.id}
        {...product}
        />
    )
})
    return (
        <div>
        <div className="products">
            {productcomponent}
        </div>
        <div className="divider70">
        </div>
        </div>
    )
}