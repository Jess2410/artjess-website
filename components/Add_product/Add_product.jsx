import React, { useState } from 'react'
import styles from './Add_product.module.css';
import { toast } from "react-toastify";
import axios from 'axios'
import { BASE_URI } from '../../public/assets/app.config';
import { updloadFile } from '../../public/assets/utils/uploadFiles';


const initProduct = {
    image:"",
    name: "",
    category: "",
    price: "",
    stock :"",
    description :""
    }

function Add_product() {

    const [loading, setLoading] = useState(false)
    const [product, setProduct] = useState(initProduct);
    console.log("product  : ", product)

    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
      };
    
      const handleCreateProduct = async (e) => {
        e.preventDefault();
        const loader = toast.loading("Veuillez patienter...");
        let img_name = null;
        if(product.image?.name){
          img_name = await updloadFile(product.image);
        }
        if (img_name) {
          axios
          .post(`${BASE_URI}/product/add`, {...product, image: img_name})
          .then((res) => {
            toast.update(loader, {
              render: "Produit enregistré avec succès !",
              type: "success",
              autoClose: 3000,
              isLoading: false,
            });
            setProduct(initProduct);
          })
          .catch((err) => {
            toast.update(loader, {
              render: "Une erreur est survenue !",
              type: "error",
              autoClose: 3000,
              isLoading: false,
            });
          });
        } else {
          toast.update(loader, {
            render: "L'image n'a pas été uploadée !",
            type: "error",
            autoClose: 3000,
            isLoading: false,
          });
        }
        
      };

  return (
    <div className={styles.wrapper}>
        <section className={styles.contact} id="contact">
        <h1 className={styles.title}>Nouveau Produit</h1>
        <form className={styles.contactForm} onSubmit={handleCreateProduct}>
        <div className={styles.content}>
            <div className={styles.row100}>
                <div className={styles.inputBx100}>
                    <input type="text" name="name" placeholder="Nom du produit" onChange={handleChange}
                    value={product?.name}/>
                </div>
            </div>
            <div className={styles.row100}>
                <div className={styles.row100}>
                    <select className={styles.inputBx100} type="text" name="category" placeholder="Catégorie" onChange={handleChange}
                          value={product?.category}>
                        <option value="">--Choisir une option--</option>
                        <option value="digital">Digital</option>
                        <option value="impression">Impression</option>
                    </select>
                </div>
            </div>
            <div className={styles.row100}>

                    <input 
                    className={styles.inputBx100}
                    type="file" 
                    id="file" 
                    name="image"
                    accept="image/png, image/jpeg"
                    placeholder="fichier"
                    hidden
                    onChange={e => setProduct({...product, image: e.target.files[0]})}
                    />
                    <label htmlFor="file" className={styles.uploadBlock}>
                      {product?.image?.name ? <img src={URL.createObjectURL(product?.image)} alt="productimg" className={styles.image} /> : <span>Télécharger une image</span>}
                      
                    </label>
            </div>
            <div className={styles.row100}>
                <div className={styles.inputBx100}>
                    <input type="number" name="price" placeholder="Prix"
                    onChange={handleChange}
                    value={product?.price}/>
                </div>
            </div>
            <div className={styles.row100}>
                <textarea className={styles.inputBx100} name="stock" placeholder="Stock"
                onChange={handleChange}
                value={product?.stock}/>
            </div>
            <div className={styles.row100}>
                <textarea className={styles.inputBx100} name="description" placeholder="Description"
                onChange={handleChange}
                value={product?.description}/>
            </div>
            {/* <div className={styles.row100}> */}
                <button className={styles.center} >Ajouter</button>
            {/* </div> */}
        </div>
        </form>
        </section>
    </div>
  )
}

export default Add_product