import React, { useState } from 'react';
import './styles.css'

const ContadorDeLikes = () => {

    const [contador, setContador] = useState(0);
    const [activado, setActivado] = useState(false)
    
    const AumentadorDeLikes = () => {
        setActivado(true);
        setContador(contador + 1);
    }
    return (
        <div className='d-flex justify-content-center'>
            <i className={`bi bi-heart checkDefault fs-5 ${activado === false ? 'd-block' : 'd-none'}`} onClick={() => AumentadorDeLikes()}></i>
            <i className={`bi bi-heartbreak-fill checkActive fs-5 ${activado === true ? 'd-block' : 'd-none'}`} onClick={() => AumentadorDeLikes()}></i>
            <span className='fs-3'>{contador}</span>
        </div>

    );
}
export { ContadorDeLikes };