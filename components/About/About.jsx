import React from 'react'
import Image from 'next/image'
import me2 from './../../public/images/me2.jpg'

export default function About() {
  return (
        <section className="about" id="about">
           <h2 className="title">About</h2>
    <div className="row">
       <div className="col50">
           <h3>Jessica, Character designer &#38; développeur web front-end.</h3>
           <p>Ma passion pour le dessin s&rsquo;est révélée il y a environ deux ans. Ayant toujours eu l&rsquo;âme artistique et créative, je n&rsquo;osais pourtant pas franchir le pas.
                    Et puis un jour, on prend du recul et on se dit pourquoi pas ?
                    Et, au final, il s&rsquo;avère souvent que
                    <br></br>
                    <cite className='cite'>&#34;Nous sommes nos propres obstacles...&#34;</cite>
                    <br></br>
                    Alors j&rsquo;ai essayé, j&rsquo;y ai pris goût et aujourd&rsquo;hui, je ne peux plus m&rsquo;en passer.
                    Aujourd&rsquo;hui, l&rsquo;art digital est une passion. Si je devais retenir quelque chose de tout ça, ce serait que : 
                    <br></br>
                    <cite className='cite'>&#34;Le plus important c&rsquo;est d&rsquo;avant tout essayer, puis, de persévérer&#34; </cite>
                    </p>
       </div>
       <div className="col50">
           <div className="imgBx">
           <Image src={me2} alt="me"  layout="responsive"/>
           </div>
       </div>
    </div>
</section>

  )
}
