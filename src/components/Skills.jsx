import React from 'react';
import styled from 'styled-components';

const SkillContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    grid-row-gap; 0.5em;
`;

const SkillsH5 = styled.h5`
    margin: 0.5em 0;
`;

//linea de % total
const SkillsLine = styled.div`
    height: 8px;
    position: relative;
    border-radius: 50px;
    background: #448AFF;
`;

const SkillsSpan = styled.span`
    display: block;
    height: 100%;
    width: ${props => props.width}%;
    border-radius: 8px;
    background-color: #303F9F;
    overflow: hidden;
    position: relative;
    box-shadow: inset 0 2px 9px rgba(255, 255, 255, 0.3) , inset 0 -2px 6px rgba(0,0,0,0.4);
`;

const porcentajes = [70,80,30,48,60];

const Skills = () =>(
    <div className="Skills">
        <SkillContainer>
            <div className="Skills-item">
                <SkillsH5>HTML</SkillsH5>
                <SkillsLine >
                    <SkillsSpan width={porcentajes[0]} />
                </SkillsLine>
                <SkillsH5>CSS</SkillsH5>
                <SkillsLine>
                    <SkillsSpan width={porcentajes[1]} />
                </SkillsLine>
                <SkillsH5>JavaScript</SkillsH5>
                <SkillsLine>
                    <SkillsSpan width={porcentajes[2]} />
                </SkillsLine>
                <SkillsH5>ReactJs</SkillsH5>
                <SkillsLine>
                    <SkillsSpan width={porcentajes[3]} />
                </SkillsLine>
            </div>
        </SkillContainer>
    </div>
);

export default Skills;