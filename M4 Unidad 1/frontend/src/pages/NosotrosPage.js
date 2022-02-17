import React from 'react';

const NosotrosPage = (props) => {
    return (
        <section className="holder">
            <div className="historia">
                <h2>historia</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit venenatis
                    facilisis, ultrices ad diam torquent scelerisque a lacinia suspend
                    isse nec, auctor hendrerit posuere magna hac laoreet orci parturie
                    nt.
                </p>
            </div>
            <h2>Staff</h2>
            <div className="personas">
                <div className="persona">
                    <img src="img/nosotros/nosotros1.jpg" width="75" alt="Juan"/>
                    <h5>Juan Gomez</h5>    
                    <h6>Gerente General</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit venenatis
                        facilisis, ultrices ad diam torquent scelerisque a lacinia suspend
                        isse nec, auctor hendrerit posuere magna hac laoreet orci parturie
                        nt.
                    </p>
                </div>
            </div>
        </section>
    );
}
export default NosotrosPage;