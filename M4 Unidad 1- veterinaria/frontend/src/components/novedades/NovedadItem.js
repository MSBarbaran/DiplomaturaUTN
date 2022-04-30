import React from 'react';

const NovedadItem = (props) => {
    const { title, subtitle, imagen, body } = props;

    return (
        <div className='novedades'>
            <div className='texto'>
                <h3>{title}</h3>
                <h4>{subtitle}</h4>
                <img src={imagen}  alt={imagen} />
                <div className='parrafo' dangerouslySetInnerHTML={{ __html: body }} />
            </div>
            <hr />
        </div>
    );
}

export default NovedadItem;