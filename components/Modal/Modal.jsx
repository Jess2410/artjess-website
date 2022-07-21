import React from 'react'
import {formatDate} from '../../public/assets/utils/formatDate'
import styles from './Modal.module.css'

const Modal = ({onClose, message}) => {
console.log("🚀 ~ file: Modal.jsx ~ line 4 ~ Modal ~ message", message)
    
    return (
        <div className={styles.modalBg}>
            <div className={styles.modal}>
                <div className="modal-content">
                    <button className="modalbtn" onClick={onClose}>&times;</button>
                    <p className={styles.modalP}> De : {message?.firstname} {message?.lastname}</p>
                    <p className={styles.modalP}>{message?.email}</p>
                    <p className={styles.modalP}>Reçu le {formatDate(message?.createdAt)}</p>
                    <p className={styles.modalP}>{message?.message}</p>
                </div>
            </div>
        </div>
    )
  }

export default Modal



