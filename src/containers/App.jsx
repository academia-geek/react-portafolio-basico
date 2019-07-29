import React from 'react';
//importar elemento que viene de stylecomponent
import { createGlobalStyle } from 'styled-components';
//importar los elementos segun los vamos utilizando
import Main from '../components/Main';
import SideBar from '../components/SideBar';
import Info from '../components/Info';
import About from '../components/About';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Certificates from '../components/Certificates';
import Skills from '../components/Skills';

const GlobalStyle = createGlobalStyle`
    body{
        font-family: 'Lato', sans-serif;
        margin: 0;
        padding: 0;
        background: #F5F5F5;
    }
    
`;

const App = () => {
    return (
        <Main>
            <GlobalStyle />
            <SideBar>
                <About />
            </SideBar>
            <Info>
                <Education />
                <Experience />
                <Certificates />
                <Skills />
            </Info>
        </Main>
    );
}

export default App;