import React from 'react';
//Este es un componente presentacional, definimos un return explicito,
//no requerimos logica ni traer nada mas a nuestro componente.
//Recordemos que Main tiene dos componentes HIJOS, estos son SIDEBAR e INFO,
//por lo cual debemos pasarlos como parametros, y esto lo hacemos con la palabra
//recervada CHILDEN
const Main = ( { children }) => (
    <div className="Main">
        <div className="Main-container">
            { children }
        </div>
    </div>
);

export default Main;

