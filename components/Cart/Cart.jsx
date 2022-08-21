import Link from 'next/link';
import React from 'react'
import Image from 'next/image'
import styles from "./Cart.module.css";



export default function Cart() {

    const articles = [{title : "dessin1"},{title : "dessin2"},{title : "dessin3"}]


  return (
    <div className={styles.dropDownMenu_content}>
        <ul>

            {articles.map((article, index) => (
                <li key={index}>
                    <Link href="/">
                        <a>{article.title}</a>
                    </Link>
                </li>
            ))}

        </ul>
      
    </div>
  )
}