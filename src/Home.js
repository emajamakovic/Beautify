
import BeautyTips from "./components/BeautyTips";
import BeautyTipsInfo from "./components/BeautyTipsInfo";
import Reviews from "./components/Reviews";
import ReviewInfo from "./components/ReviewInfo";
import Bestseller from "./components/Bestseller";
import CategoryMP from "./components/CategoryMP";
import CategoryMpInfo from "./components/CategoryMpInfo";
import MainPhoto from "./components/MainPhoto"



export default function Home() {


const beautytips=BeautyTipsInfo.map(beautytip => {
    return (
    <BeautyTips 
        key={beautytip.id}
        {...beautytip}
    />
    )
})

const reviews=ReviewInfo.map(review => {
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
    {beautytips}
</div>

<div className="categories">{categories}</div>

<Bestseller/>

<div className="clasifier_special">REVIEW</div>
<div className="clasifier_big">Others say about us</div>
<div className="customer_review">
    {reviews}
</div>
</>
)
}