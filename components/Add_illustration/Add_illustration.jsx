import React, { useState } from 'react'
import styles from './Add_illustration.module.css';
import { toast } from "react-toastify";
import axios from 'axios'
import { BASE_URI } from '../../public/assets/app.config';
import { updloadFile } from '../../public/assets/utils/uploadFiles';


const initIllustration = {
    image:"",
    name: "",
    }

function Add_illustration() {

    const [loading, setLoading] = useState(false)
    const [illustration, setIllustration] = useState(initIllustration);

    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setIllustration({ ...illustration, [name]: value });
      };
    
      const handleCreateIllustration = async (e) => {
        e.preventDefault();
        const loader = toast.loading("Veuillez patienter...");
        let img_name = null;
        if(illustration.image?.name){
          img_name = await updloadFile(illustration.image);
        }
        if (img_name) {
          axios
          .post(`${BASE_URI}/illustration/add`, {...illustration, image: img_name})
          .then((res) => {
            toast.update(loader, {
              render: "Dessin enregistré avec succès !",
              type: "success",
              autoClose: 3000,
              isLoading: false,
            });
            setIllustration(initIllustration);
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
        <h1 className={styles.title}>Nouvelle illustration</h1>
        <form className={styles.contactForm} onSubmit={handleCreateIllustration}>
        <div className={styles.content}>
            <div className={styles.row100}>
                <div className={styles.inputBx100}>
                    <input type="text" name="name" placeholder="Nom de l'illustration" onChange={handleChange}
                    value={illustration?.name}/>
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
                    onChange={e => setIllustration({...illustration, image: e.target.files[0]})}
                    />
                    <label htmlFor="file" className={styles.uploadBlock}>
                      {illustration?.image?.name ? <img src={URL.createObjectURL(illustration?.image)} alt="illustration img" className={styles.image} /> : <span className={styles.uploadBlock_span}>Ajouter une image</span>}
                      
                    </label>
            </div>
                <button className={styles.center} >Ajouter</button>

            </div>
        </form>
        </section>
    </div>
  )
}

export default Add_illustration