import React from 'react';

const ContactoPage = (props) => {
    return (
        <main className="holder">
            <div className="columna contacto">
                <h2>Complete el siguiente formulario</h2>
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
                    <p className="centrar">
                        <input type="submit" value="Enviar" />
                    </p>
                </form>
            </div>
            <div className="columna datos">
                <h2>Otras vias de contacto</h2>
                <ul>
                    <li><i class="fas fa-map-marker-alt"></i> <b>Dirección</b> Av. Vicente Lopez 123</li>
                    <li><i class="fas fa-phone-volume"></i> <b>Teléfono</b>  9938 399 293</li>
                    <li><i class="fas fa-mobile-alt"></i> <b>Movil</b>  387 903 4204</li>
                    <li><i class="far fa-envelope"></i> <b>Email</b> contact@veterinaria.com</li>
                    <li><i class="fab fa-facebook"></i> <b>Facebook</b>  veterinariax </li>
                    <li><i class="fab fa-twitter"></i> <b>Twitter</b> veterinariax </li>
                    <li><i class="fab fa-instagram"></i> <b>Instagram</b> veterinariax </li>
                </ul>
            </div>
        </main>

    );
}
export default ContactoPage;