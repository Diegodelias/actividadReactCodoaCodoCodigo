import React from 'react';
import Tabla from './Tabla';
const Section = () => {
    return (
        <div className="section">
            
            <p id="parrafo1">React.Es una librería de javascript para crear interfaces de usuario (UI) en el front-end</p>
            <p id="parrafo1">React crea componentes, que son elementos HTML personalizados y reutilizables, para crear interfaces de usuario de manera rápida y eficiente.Además optimiza la forma en que se almacena y manejan los datos</p>
        
        
            <div>
                <Tabla/>

            </div>
        
        
        </div>

       
    );
};

export default Section;