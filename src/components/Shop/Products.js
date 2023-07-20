import { useState, useEffect, useCallback } from 'react';
import { getProducts } from '../../utils/services';
import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = () => {
  const [products, setProducts] = useState([]),
    [isLoading, setIsLoading] = useState(false),
    [error, setError] = useState(null),
    fetchProducts = useCallback(async () => {
      setIsLoading(true);
      setError(null);
      setProducts([]);
      try {
        const _products = await getProducts();
        setProducts(_products);
      } catch (err) {
        setError('There was an error fetching products');
      }
      setIsLoading(false);
    }, []);

  useEffect(() => {
    (async () => await fetchProducts())();
  }, [fetchProducts]);

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      {
        isLoading
          ? <p>Loading...</p>
          : (error ? <p>{error}</p>
            : <ul>
              {products && products.length > 0 ? products.map(product =>
                <ProductItem
                  key={product.id}
                  title={product.title}
                  price={product.price}
                  description={product.description}
                />
              ) : <li className={classes.item}>No products found</li>}
            </ul>)
      }
    </section>
  );
};

export default Products;
