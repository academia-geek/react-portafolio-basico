import React from 'react';
import H2Styled from '../styled/H2Styled';
import H3Styled from '../styled/H3Styled';
import PStyled from '../styled/PStyled';
const Certificates = () =>(
    <div className="Certificates">
        <H2Styled name="Certificaciones" />
        <div className="Certificates-container">
            <div className="Certificates-item">
                <H3Styled>Amazon Web Services</H3Styled>
                <PStyled name="Practicante de la Nube"/>
            </div>
        </div>
    </div>
);

export default Certificates;