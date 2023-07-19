import React from 'react';
import style from './Contacto.module.css';

import { FaEnvelope } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FiMapPin } from 'react-icons/fi';

const Contacto = () => {
  return (
    <div className={style.background}>
      <div className={style.generalContainer}>
        <div className={style.upperContainer}>
          <div className={style.linksContainer}>
            <div className={style.linkContainer}>
              <a className={style.iconText} href="mailto:lautaromohr@gmail.com" target="_blank" rel="noopener noreferrer">
                <FaEnvelope className={style.icons} />
                lautaromohr@gmail.com
              </a>
            </div>

            <br />

            <div className={style.linkContainer}>
              <a className={style.iconText} href="https://www.instagram.com/mohr.arquitectura/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className={style.icons} />
                @mohr.arquitectura
              </a>
            </div>
            <br />

            <div className={style.linkContainer}>
              <a className={style.iconText} href="https://wa.me/543435348100" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className={style.icons} />
                +54 343 5348100
              </a>
            </div>
            <br />
            <div className={style.linkContainer}>
              <a className={style.iconText} href='https://goo.gl/maps/EtojavnRy1UKihBr7' target='_blank' rel="noopener noreferrer">
                <FiMapPin className={style.icons} />
                Otto Sangemüller 1425 - Crespo, Entre Ríos
              </a>
            </div>
            <br />

          </div>

          <form >
            <input type="text" placeholder='Nombre y Apellido' />
          </form>

        </div>
        <div className={style.containerCard}>
          {/* <h3>Dónde podés encontrarnos?</h3> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3382.3158244716287!2d-60.31461682563678!3d-32.03364182635983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b424a27f97ca39%3A0x88ff7d09a31a4033!2sOtto%20Sagem%C3%BCller%201425%2C%20Crespo%2C%20Entre%20R%C3%ADos!5e0!3m2!1ses!2sar!4v1689270371989!5m2!1ses!2sar"
            width="1200vw" // Establece el ancho al 100% del contenedor
            height="400"// Establece la altura en 50vh
            style={{ border: '', filter: 'grayscale(100%)', margin:'1rem' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

        </div>
      </div>
    </div>
  );
};

export default Contacto;
