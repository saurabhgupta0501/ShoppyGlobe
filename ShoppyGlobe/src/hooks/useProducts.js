import { useState, useEffect } from 'react';
import axios from 'axios';

const useProducts = (productId = null) => {
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                if (productId) {
                    const response = await axios.get(`https://dummyjson.com/products/${productId}`);
                    setProduct(response.data);
                } else {
                    const response = await axios.get('https://dummyjson.com/products');
                    setProducts(response.data.products);
                }
                setError(null);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [productId]);

    return { products, product, loading, error };
};

export default useProducts;