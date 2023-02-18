import React from "react";
import BeautyTips from "./components/BeautyTips";
import Reviews from "./components/Reviews";
import Bestseller from "./components/Bestseller";
import CategoryMP from "./components/CategoryMP";
import CategoryMpInfo from "./components/CategoryMpInfo";
import MainPhoto from "./components/MainPhoto"
import { db } from "./firebase-config";
import {getDocs, collection} from "@firebase/firestore";
import { useEffect } from "react";
import { query, orderBy, limit } from "firebase/firestore";



export default function Home() {
    const[reviews, setReviews]=React.useState([]);
    const[beautytips, setbeautyTips]=React.useState([]);

    const reviewCollectionRef=collection(db, "reviews");
    const beautytipsCollectionRef=collection(db, "beautytips");

    useEffect( () => {
        const getReviews= async () => {
            const q=query(reviewCollectionRef, orderBy("stars", "desc"), limit(4));
            const data=await getDocs(q);  
            setReviews(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        };

        const getBeautyTips= async()=> {
            const q=query(beautytipsCollectionRef, limit(3))
            const data=await getDocs(q);
            setbeautyTips(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        };

        getReviews();
        getBeautyTips();
    }, []);



const beautytipscomponent=beautytips.map(beautytip => {
    return (
    <BeautyTips 
        key={beautytip.id}
        {...beautytip}
    />
    )
})

const reviewscomponent=reviews.map(review => {
    return (
        <Reviews
        key={review.id}
        {...review}
        />
    )
})

const categories=CategoryMpInfo.map(category => {
    return (
        <CategoryMP
        key={category.id}
        {...category}
        />
    )
})

return(
    <>

<MainPhoto/>
<div className="clasifier">BEAUTY TIPS</div>
<div className="beautytips">
    {beautytipscomponent}
</div>

<div className="categories">{categories}</div>

<Bestseller/>

<div className="clasifier_special">REVIEW</div>
<div className="clasifier_big">Others say about us</div>
<div className="customer_review">
    {reviewscomponent}
</div>
</>
)
}