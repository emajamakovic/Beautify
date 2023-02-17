import React, { useEffect } from "react";
import Contact from "./components/Contact";
import { db } from "./firebase-config";
import { collection, getDocs} from "@firebase/firestore"


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
        <Contact
        key={product.id}
        {...product}
        />
    )
})
    return (
        <div>
        <div className="contacts">
            {productcomponent}
        </div>
        <div className="divider70">
        </div>
        </div>
    )
}