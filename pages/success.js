import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import {BsBagCheckFill} from 'react-icons/bs';

import {useStateContext} from '../context/StateContext';
import { runFireworks } from '../lib/utils';

const Success = () => {
  const {setCartItems, setTotalPrice, setTotalQuantities} = useStateContext();
  
  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, [])
  
  
  return (
    <div className="success-wrapper">
        <div className="success">
            <p className="icon">
                <BsBagCheckFill />
            </p>
            <h2>Gracias Por Tu Compra!</h2>
            <p className="email-msg">Revisa tu correo para tu comprobante</p>
            <p className="description">
                Si tienes alguna pregunta, envianos un correo
                <a className="email" href="mailto:ordenes@ejemplos.com">
                    ordenes@ejemplo.com
                </a>
            </p>
            <Link href="/">
                <button type="button" width="300px" className="btn">
                    Continua Comprando
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Success