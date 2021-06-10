import React, { useEffect, useState } from 'react';
import api from "../../services/api";
import logoBS from "../../assets/BSbasic-logo.png";
import * as Icon from "react-icons/fi";
import { Link } from "react-router-dom";

import "./index.css";

export default function Dashboard() {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');
    
    useEffect(() => {
        async function findAllProducts(){
            const response = await api.get('/products');
            setProducts(response.data);          
        }
        findAllProducts();
    }, []);

//    useEffect(() => {
//         async function handleSearch() {
//             const response = await api.get('/products', {
//                 params: {

//                 }
//             });
//         }
//    });

    return(
        <div className="container-dashboard">
            <div className="card-nav">
                <img className="logo" src={logoBS} alt="logo-basic.png" height="32"/>
                <form>
                    <input 
                        type="text" 
                        name="search" 
                        autoComplete="off" 
                        placeholder="Search for anything"
                    />
                    <button className="btn-search-dashboard">
                        <Icon.FiSearch width="42" height="42"/>
                    </button>
                </form>
                <div className="options-dashboard">
                    <Icon.FiHeart className="icon1"/>
                    <Icon.FiUser />
                </div> 
            </div>

            
            <div>
                <section className="container grid grid-template-columns-3">
                    {products.map(product => (
                        <div className="items-product-card" key={product.id}>
                            <Link to={`/details/${product.slug}`}>
                                <img className="images-dashboard" src={`https://ecommerce-elaine.herokuapp.com${product.image.url}`} alt={product.image.url}/>
                                <h3>{product.title}</h3>
                                <h5>U$ {product.price}</h5>
                            </Link>
                        </div>
                    ))}
                </section>
            </div>
            

        </div>  
    );
}