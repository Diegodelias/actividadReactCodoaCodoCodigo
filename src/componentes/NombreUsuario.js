import React from 'react';

const NombreUsuario = (props) => {
    console.log(props)
    return (
      
        <div className="nombre-apellido">
          <p>Hola, {props.user.nombre} {props.user.apellido}</p>
            
        </div>
    );
};

export default NombreUsuario;
