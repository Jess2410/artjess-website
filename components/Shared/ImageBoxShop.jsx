import Image from "next/image";
import styles from "./../../components/Shop/Shop.module.css";
import {useRouter} from "next/router"

export const ImageBoxShop = ({ img, alt, title, price, id, slug }) => {
const router = useRouter()
  return (
    <div className="box">
      <div className="iconBx">
        <Image src={img} alt={alt} height="400px" width="400px" />
      </div>
        <h2 className={styles.title}>{title}</h2>
        <h3 className={styles.price}>$ {price}</h3>
        <button className={styles.center} onClick={()=>router.push(`/products/${img.id}`)}>Voir</button>
    </div>
  );
};
