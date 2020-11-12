import React from 'react';
import NombreUsuario from './NombreUsuario';
import Avatar from './Avatar';

const Header = () => {
    let user = {nombre:'Juan',apellido:'Perez'}
    return (
        <div>
            <header className="encabezado"  >
            <h1 className="logo">Striata</h1>
                <div className="data-usuario">
                
                <NombreUsuario user = {user}/>
                <Avatar/>

                </div>


            </header>
            
        </div>
    );
};

export default Header;