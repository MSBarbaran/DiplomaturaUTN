import React from 'react';

const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="homeimg">
                <img src="img/home/img03.jpg" alt="avion" />
            </div>
            <div className="columnas">
                <div className="bienvenidos left">
                    <h2>Cuidado profesional para tu mascota</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi quidem nam voluptatem optio culpa dicta! Cum facere velit iusto consectetur omnis! Voluptatum voluptas repellat repudiandae sapiente reprehenderit suscipit quae alias.
                        Cum facere velit iusto consectetur omnis!.
                    </p>
                </div>
                <div className="testimonios left">
                    <div className="testimonio ">
                        <span className="fas fa-phone-volume"></span>
                        <span className="contacto"> <b>Telefono</b> 9938 399 293</span>
                    </div>
                    <div className="testimonio">
                        <span className="fas fa-mobile-alt"></span>
                        <span className="contacto"> <b>Movil </b> 387 903 4204</span>
                    </div>
                    <div className="testimonio">
                        <span className="far fa-envelope icono"></span>
                        <span className="contacto"> <b> Email </b> contact@veterinaria.com</span>
                     </div>
                </div>
            </div>
        </main>
    );
}
export default HomePage;