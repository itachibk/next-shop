import { useState } from 'react';
import ProductItem from '../components/product/ProductItem';
import { getData } from '../utils/fetchData';
const Home = (props) => {
  const [products, setProducts] = useState(props.products);
  return (
    <div className="products">
      {products.length === 0 ? <h2>No Products</h2> : products.map((product) => <ProductItem key={product._id} product={product} />)}
    </div>
  );
};
export async function getServerSideProps() {
  const res = await getData('product');
  return {
    props: {
      products: res.products,
      result: res.result,
    },
  };
}
export default Home;
