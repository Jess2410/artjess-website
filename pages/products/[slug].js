import React, { useCallback, useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import Footer from "../../components/Footer/Footer.jsx";
import axios from "axios";
import { BASE_URI } from "../../public/assets/app.config";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { addItemCart } from "../../redux/cart/actions";
import { Toast } from "../../public/assets/Toast";

export default function ProductScreen() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [nbProduct, setNbProduct] = useState(1);
  const [display, setDisplay] = useState(false);
  const { cart } = useSelector((s) => s.cartReducer);
  const router = useRouter();
  const dispatch = useDispatch();
  const { slug } = router.query;

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
    if (cart?.length > 0) {
      localStorage.setItem("cart-infos", JSON.stringify(cart));
    }
  }, [cart]);

  const addToCart = (e) => {
    // const loader = toast.loading("Veuillez patienter...");
    e.preventDefault();

    const itemAdded = {
      ...product,
      quantity: nbProduct,
    };

    dispatch(addItemCart(itemAdded));
    Toast("success", "Article ajouté !");
  };

  return (
    <div>
      <Layout title="Product Details">
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
      </Layout>
      <Footer />
    </div>
  );
}
