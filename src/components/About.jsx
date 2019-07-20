import React from 'react';
//Este componente tiene mas detalles visuales
const About = () => (
    <div className="About">
        <div className="About-container">
            <div className="About-avatar">
                <figure>
                    <img src="/" alt="Mi avatar" />
                </figure>
            </div>
            <div className="About-name">
                <h2>John Faber Florez</h2>
            </div>
            <div className="About-profession">
                <p>FrontEnd Developer en GeekAcademy</p>
            </div>
            <div className="About-desc">
                <p>Soy desarrollador web y me encanta enseñar</p>
            </div>
            <div className="About-location">
                <p>Medellín, Colombia</p>
            </div>
            <div className="About-social">
                Social
            </div>
        </div>
    </div>
); 

export default About;