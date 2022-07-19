import React from 'react';
import styles from './Add_product.module.css';

function Add_product() {
  return (
    <div>
<form action="">
    <div className={styles.row100}>
        <div className={styles.inputBx50}>
            <input type="text" name="name_product" placeholder="Nom du produit"/>
        </div>
        <div className={styles.inputBx50}>
            <input type="text" name="category_product" placeholder="Catégorie"/>
        </div>
        {/* <div className={styles.inputBx50}>
            <input type="text" name="firstname" placeholder="First Name" onChange={handleChange}
            value={message?.firstname}/>
        </div> */}
    </div>
</form>

    </div>
  )
}

export default Add_product