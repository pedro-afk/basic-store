import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';

import "./index.css";

export default function Details() {
    let { slug } = useParams();
    const [receives, setReceives] = useState([]);

    useEffect(() => {
        async function receiveSlug() {
            const response = await api.get('products', {
                params: {
                    slug: slug
                }
            });
            setReceives(response.data);
            console.log(response.data);
        }
        receiveSlug();
    }, []);


    return(
        <div>
            {receives.map(receive => (
                <div className="card-product-detail" key={receive.id}>
                    <img className="slug-image" src={`https://ecommerce-elaine.herokuapp.com${receive.image.url}`} alt={receive.image.url}/>
                    <div className="column">
                        <div className="content">
                            <h1>{receive.title}</h1>
                            <p className="description">{receive.description}</p>
                            <h2>U$ {receive.price}</h2>
                        </div>
                        <button className="btn-buy">Buy</button>
                    </div>
                </div>
            ))}
        </div>
    );
}