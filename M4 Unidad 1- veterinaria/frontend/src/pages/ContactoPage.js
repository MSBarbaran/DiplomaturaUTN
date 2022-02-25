import '../styles/components/pages/ContactoPage.css'

import React from 'react';

const ContactoPage = (props) => {
    return (
        <main className="holder">
            <div className="nosotros">
                <div className="contacto-info">
                    <h3>Otras vias de contacto</h3>
                    <ul>
                        <li><i className="fas fa-map-marker-alt"></i> <b>Dirección</b> Av. Vicente Lopez 123</li>
                        <li><i className="fas fa-phone-volume"></i> <b>Teléfono</b>  9938 399 293</li>
                        <li><i className="fas fa-mobile-alt"></i> <b>Movil</b>  387 903 4204</li>
                        <li><i className="far fa-envelope"></i> <b>Email</b> contact@veterinaria.com</li>
                        <li><i className="fab fa-facebook"></i> <b>Facebook</b>  veterinariax </li>
                        <li><i className="fab fa-twitter"></i> <b>Twitter</b> veterinariax </li>
                        <li><i className="fab fa-instagram"></i> <b>Instagram</b> veterinariax </li>
                    </ul>
                </div>
                <div className="contacto-form">
                    <h4>Contactanos</h4>
                    <form action="" method="" className="formulario">
                        <p>
                            <label>Nombre</label>
                            <input type="text" name="nombre" />
                        </p>
                        <p>
                            <label>Email</label>
                            <input type="text" name="email" />
                        </p>
                        <p>
                            <label>Teléfono</label>
                            <input type="text" name="telefono" />
                        </p>
                        <p>
                            <label>Comentario</label>
                            <textarea name="mensaje"></textarea>
                        </p>
                        <p>
                        <button className="centrar"type="submit" value="Enviar">
                            Enviar
                        </button>
                         </p>
                    </form>
                </div>
                
            </div>
        </main>

    );
}
export default ContactoPage;