import React from 'react'
import Image from 'next/image'
// import me2 from './../../public/images/me2.jpg'
import img1 from './../../public/images/img1.jpg'
import img2 from './../../public/images/img2.jpg'
import img3 from './../../public/images/img3.jpg'

import './Services.module.css'


export default function Services() {
  return (
    <section className="services" id="services">
    <div className="content">
        <div className="mxw800p">
            <h3 className='title'>Services</h3>
            <p className='text'>Si tu as un projet graphique (logo, charte graphique, affiche, pochette d’album, carte de visite, flyers, catalogue…) ou un projet d’illustration (couverture de livre, illustration d’un livre pour enfant, édition…) et que tu souhaites faire appel à une professionnelle pour le réaliser, je suis à ton écoute, tu es au bon endroit !

Ma mission est de t’aider à mettre en lumière ton activité, tes créations, tes idées. Comment ? En créant une identité visuelle singulière et impactante, des supports de communication sur mesure ou des illustrations adaptées !</p>
        </div>
        <div className="services">
            <div className="box">
                <div className="iconBx">
                <Image src={img1} alt="me"  height="170px" width="170px"/>
                </div>
                <div className="content">
                    <h2>Illustration</h2>
                    <p className='text'>Un dessin vaut mieux que mille mots ! Un packaging unique pour habiller tes produits ? Des illustrations de livres ? Ou pour tout autre demande d’illustration !</p>
                </div>
            </div>
            <div className="box">
                <div className="iconBx">
                <Image src={img2} alt="me" height="170px" width="170px"/>
                </div>
                <div className="content">
                    <h2>Logo</h2>
                    <p className='text'>Nous allons travailler ensemble pour trouver un univers visuel cohérant et professionnel à ton entretprise.</p>
                </div>
            </div>
            <div className="box">
                <div className="iconBx">
                <Image src={img3} alt="me" height="170px" width="170px"/>
                </div>
                <div className="content">
                    <h2>NFTs</h2>
                    <p className='text'>Coming Soon.</p>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}
