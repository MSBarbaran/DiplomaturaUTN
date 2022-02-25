// estilos css
import '../../styles/components/layout/Header.css'

import React from 'react';

const Header = (props) => {
    return (
        <header>
            <div className="holder">
                <div className="logo">
                    <img src="img/logo.png" width="100" alt="Veterinaria X" />
                    <h1>Veterinaria X</h1>
                </div>
            </div>
        </header>
    );
}
export default Header;



