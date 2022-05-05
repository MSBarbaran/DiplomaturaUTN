import '../styles/components/pages/ContactoPage.css'

import React, { useState } from 'react';
import axios from 'axios';

// enviar el formulario
const ContactoPage = (props) => {

    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }


    // formulario
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
                <div className="contacto-form" >
                    <h4>Contactanos</h4>
                    <form action="/contacto" method="post" className="formulario" onSubmit={handleSubmit}>
                        <p>
                            <label>Nombre</label>
                            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange}/>
                        </p>
                        <p>
                            <label>Email</label>
                            <input type="text" name="email" value={formData.email} onChange={handleChange} />
                        </p>
                        <p>
                            <label>Teléfono</label>
                            <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} />
                        </p>
                        <p>
                            <label>Comentario</label>
                            <textarea name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
                        </p>
                        <p>
                        <button className="centrar"type="submit" value="Enviar">
                            Enviar
                        </button>
                         </p>
                    </form>
                    {sending ? <p className='alertaUno'><i className="fas fa-circle-notch fa-spin"></i> <span> Enviando...</span></p>: null}
                    {msg ? <p className='alertaDos'><i className='fas fa-check'> <span> {msg} </span></i></p> : null}
                </div>
                
            </div>
        </main>

    );
}
export default ContactoPage;