import React from 'react';

const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="homeimg">
                <img src="img/home/img01.jpg" alt="avion" />
            </div>
            <div className="columnas">
                <div className="bienvenidos left">
                    <h2>Bienvenidos</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit venenatis 
                        facilisis, ultrices ad diam torquent scelerisque a lacinia suspend
                        isse nec, auctor hendrerit posuere magna hac laoreet orci parturie
                        nt.
                    </p>
                </div>
                <div className="testimonios left">
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span className="cita">Simplemente excelente</span>
                        <span className="autor">Juan Perez</span>
                    </div>
                </div>
            </div>
        </main>
    );
}
export default HomePage;