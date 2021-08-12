import Link from 'next/link';

/* eslint-disable @next/next/no-img-element */
const ProductItem = ({ product }) => {
  const userLink = () => {
    return (
      <>
        <Link href={`product/${product._id}`}>
          <a className="btn btn-info mr-1">View</a>
        </Link>
        <buton className="btn btn-success ml-1 flex-fill">Buy</buton>
      </>
    );
  };

  return (
    <div>
      <div className="card" style={{ width: '18rem' }}>
        <div className="card-body">
          <img className="card-img-top" src={product.images[0].url} alt="Card image cap"></img>
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
          <div className="row justify-content-between mx-0">
            <p className="text-danger">{product.price}$</p>
            <p className="text-danger">In Stock: {product.inStock}</p>
          </div>

          <div className="row justify-content-between mx-0">{userLink()}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
