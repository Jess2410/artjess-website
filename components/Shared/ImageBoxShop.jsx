import Image from "next/image";
import styles from "./../../components/Shop/Shop.module.css";
import {useRouter} from "next/router"
import { BASE_URI } from '../../public/assets/app.config';


export const ImageBoxShop = ({ product }) => {
  
const router = useRouter()
  return (
    <div className={styles.box}>
      <div className={styles.iconBx}>
         {/* <Image src={product?.image} alt={alt} height="400px" width="400px" />  */}
         <img width="100%" height={280} src={`${BASE_URI}/file/images-store/${product.image}`} alt={product.image} /> 
      </div>
        <h2 className={styles.title}>{product?.name}</h2>
        <h3 className={styles.price}>$ {product?.price}</h3>
        <button className={styles.center} onClick={()=>router.push(`/products/${product?._id}`)}>Voir</button>
    </div>
  );
};
