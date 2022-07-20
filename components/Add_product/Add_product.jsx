import React from 'react';
import styles from './Add_product.module.css';

function Add_product() {
  return (
    <div className={styles.wrapper}>
        <section className={styles.contact} id="contact">
        <h1 className={styles.title}>Nouveau Produit</h1>
        <form className={styles.contactForm}>
        <div className={styles.content}>
            <div className={styles.row100}>
                <div className={styles.inputBx100}>
                    <input type="text" name="name_product" placeholder="Nom du produit"/>
                </div>
            </div>
            <div className={styles.row100}>
                <div className={styles.row100}>
                    <select className={styles.inputBx100} type="text" name="category_product" placeholder="Catégorie">
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
                    name="file"
                    accept="image/png, image/jpeg"
                    placeholder="fichier"/>
            </div>
            <div className={styles.row100}>
                <div className={styles.inputBx100}>
                    <input type="number" name="price" placeholder="Prix"/>
                </div>
            </div>
            <div className={styles.row100}>
                <textarea className={styles.inputBx100} name="description" placeholder="Description"/>
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