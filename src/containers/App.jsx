import React from 'react';
//importar los elementos segun los vamos utilizando
import Main from '../components/Main';
import SideBar from '../components/SideBar';
import Info from '../components/Info';
import About from '../components/About';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Certificates from '../components/Certificates';
import Skills from '../components/Skills'

const App = () => {
    return (
        <Main>
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