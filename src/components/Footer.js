import React from 'react'
import "./Footer.css";

const Footer = () => {
  return (
    <div className='div-footer'>
    <section class="footer">
        <div class="social">
            <a href="/"><i class="fa fa-instagram"></i></a>
            <a href="/"><i class="fa fa-snapchat"></i></a>
            <a href="/"><i class="fa fa-twitter"></i></a>
            <a href="/"><i class="fa fa-facebook"></i></a>
        </div>
        
        <ul class="list">
            <li>
                <a href='/'>Pocetna</a>
            </li>
            <li>
                <a href='/'>Funkcije</a>
            </li>
            <li>
                <a href='/'>Reference</a>
            </li>
            <li>
                <a href='/'>Kontakt</a>
            </li>
            <li>
                <a href='/'>Privacy Policy</a>
            </li>
        </ul>
        <p className='copyright'>Smart Ambiente @2023</p>
    </section>
    </div>
  )
}

export default Footer
