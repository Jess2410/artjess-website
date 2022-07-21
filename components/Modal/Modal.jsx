import React from 'react'
import {formatDate} from '../../public/assets/utils/formatDate'
import styles from './Modal.module.css'
import Image from 'next/image'

const Modal = ({onClose, message}) => {
console.log("🚀 ~ file: Modal.jsx ~ line 4 ~ Modal ~ message", message)
    
    return (
        <div className={styles.modalBg}>
            <div className={styles.modal}>
                <div className={styles.modalContent}>
                    <div className={styles.modalBtnContent}>
                    <button className={styles.modalBtn} onClick={onClose}>
                    <Image src="/images/close.svg" alt="icon" width={30} height={30} />
                    </button>
                    </div>
                    <div className={styles.modalRow}>
                    <div className={styles.rowLeftCenter}>
                    <Image src="/images/customers.svg" alt="icon" width={30} height={30} />
                    <p className={styles.modalP}> 
                    {message?.firstname} {message?.lastname} ({message?.email})</p>
                    </div>
                    <p className={styles.modalDate}>{formatDate(message?.createdAt)}</p>
                    </div>
                    <div>
                    <p className={styles.modalText}>{message?.message}</p>
                    </div>
                </div>
            </div>
        </div>
    )
  }

export default Modal



