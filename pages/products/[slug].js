import React, { useCallback, useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import Footer from "../../components/Footer/Footer.jsx";
import axios from "axios";
import { BASE_URI } from "../../public/assets/app.config";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { addItemCart, ADD_ITEM_CART } from "../../redux/cart/actions";

export default function ProductScreen() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [nbProduct, setNbProduct] = useState(1);
  const [display, setDisplay] = useState(false);

  const router = useRouter();
  const dispatch = useDispatch();
  const { slug } = router.query;
  const cartStore = useSelector((s) => s.cartReducer);

  const updateNbProduct = (e) => {
    setNbProduct(Number(e.target.value));
  };

  const getProduct = useCallback(() => {
    setLoading(true);
    axios
      .get(`${BASE_URI}/product/by-id/${slug}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
    setLoading(false);
  }, [slug]);

  useEffect(() => {
    getProduct();
  }, [getProduct]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (display) {
        setDisplay(false);
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [display]);
  const addToCart = (e) => {
    e.preventDefault();

    const itemAdded = {
      id: product._id,
      quantity: nbProduct,
    };
    console.log(
      "🚀 ~ file: [slug].js ~ line 67 ~ addToCart ~ itemAdded",
      itemAdded
    );

    dispatch(addItemCart(itemAdded));
    setDisplay(true);
  };

  return (
    <div>
      <Layout title="Product Details">
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error.message}</div>
        ) : (
          <div className="showcase">
            <div className="container-img-showcase">
              {product?.image && (
                <img
                  src={`${BASE_URI}/file/images-store/${product.image}`}
                  alt={product.name}
                  width={300}
                  height={300}
                />
              )}
            </div>
            <div className="product-infos">
              <h2>{product?.name}</h2>
              <p>Price: ${product?.price}</p>
              <form onSubmit={addToCart}>
                <label htmlFor="quantity">Quantity :</label>
                <input
                  type="number"
                  id="quanitity"
                  value={nbProduct}
                  onChange={updateNbProduct}
                />
                <button>Add To Cart</button>
                {display ? (
                  <span className="adding-info">Ajouté au panier</span>
                ) : (
                  ""
                )}

                {/* <span className="adding-info"></span> */}
              </form>
            </div>
          </div>
        )}
      </Layout>
      <Footer />
    </div>
  );
}
