import * as React from 'react';
import {Link, useParams} from 'react-router-dom'
import {  FaArrowLeft } from "react-icons/fa";
import GoToTop from "./GoToTop";
import Tab  from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { db } from '../firebase-config';
import {collection, getDocs} from "@firebase/firestore"
import { useCart } from "react-use-cart";



export default function SingleContact() {
    const [tabvalue, setTabValue]=React.useState('0');
    const [products, setProduct]=React.useState([]);
    const { addItem } = useCart();


    const ProductCollectionRef=collection(db, "products");
        React.useEffect(() => {
            const getProducts= async () => {
            const data=await getDocs(ProductCollectionRef);
            setProduct(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
         };
         getProducts();
        }, []);
    

    const { id } = useParams();
    const SingleProduct = products.find((product) => String(product.id) === id) || {};
    
    const handleChange = (event, newValue) => {
        setTabValue(newValue);
      };




    return (
        <div className="singlecontact">
            <div className="singleproduct-backbutton">
            <Link className="sp-backbutton" to="/products"><FaArrowLeft style={{fontSize:14, paddingRight:7}}/>Back to products</Link>
            </div>
            <div className="singlecontact-intro">
                <div>
                    <img className="singlecontact-image" src={SingleProduct.imginactive}/>
                </div>
                <div className="singlecontact-info">
                    <h2 className="singlecontact-name">{SingleProduct.name}</h2>
                    <p className="singlecontact-description">{SingleProduct.description}</p>
                    <div className="sc-description-list">
                        <ul className="sc-description-listitems">
                            <li>{SingleProduct.desc1}</li>
                            <li>{SingleProduct.desc2}</li>
                            <li>{SingleProduct.desc3}</li>
                        </ul>
                    </div>
                    <button className="singlecontact-button" onClick={() => addItem(SingleProduct)}>BUY NOW</button>
                </div>
            </div>
            <GoToTop/>

            <div className="singlecontact-tabs">
                 <TabContext value={tabvalue}>

                    <div className="tabs">
                    <TabList  onChange={handleChange} 
                              sx={{
                                "& button": {color:'black', width:'300px'},
                              "& button.Mui-selected": {backgroundColor: '#FFF2FC', color: 'black'}
                               }}
                              TabIndicatorProps={{hidden:true}}
                     >
                
                        <Tab  label="Details" value="0" />
                        <Tab  label="How to" value="1" />
                        <Tab  label="Ingredients" value="2" />
                    </TabList>
                    </div>
                
                   <div className="tabpanel">
                    <TabPanel value="0">{SingleProduct.details}</TabPanel>
                    <TabPanel value="1">{SingleProduct.usage}</TabPanel>
                    <TabPanel value="2">{SingleProduct.ingredients}</TabPanel>
                    </div> 
            </TabContext>
            </div>
               
        </div>
        
    )
}
