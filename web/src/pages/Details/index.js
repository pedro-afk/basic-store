import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';

export default function Details() {
    let { slug } = useParams();
    const [receive, setReceive] = useState([]);

    useEffect(() => {
        async function receiveSlug() {
            const response = await api.get('products', {
                params: slug
            });
            setReceive(response.data);
            console.log(response);
        }
        receiveSlug();
    }, []);


    return(
        <h1>{slug}</h1>
    );
}