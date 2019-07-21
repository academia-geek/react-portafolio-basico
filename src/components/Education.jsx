import React from 'react';
import H2Styled from '../styled/H2Styled';
import H3Styled from '../styled/H3Styled';
import PStyled from '../styled/PStyled';

const Education = () => (
    <div className="Education">
        <H2Styled name="Estudios" />
        <div className="Education-container">
            <div className="Education-item">
                <H3Styled>Ingeniero Informático - PCJIC -
                    <span>Ag 2010 - Sep 2016</span>
                </H3Styled>
                <PStyled name="Proyecto: Salva vida Vial"/>
            </div>
        </div>
    </div>
);

export default Education;