import React from 'react';
//estilos para volverlo mas presentacional
import styled from 'styled-components';

const SocialStyle = styled.div`
    margin: 0 auto;
    display: block;
`;

const SocialUl = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
`;

const SocialLi = styled.li`
    display: inline;
    margin: 0 1em 0 0;

`;

const SocialAnchor = styled.a`
    color: #212121;
    text-decoration: none;
    font-size: 1.2em;
`;

const SocialIcon = styled.i`
    color: #333
`;


const Social = () => (
    <SocialStyle>
        <SocialUl>
            <SocialLi>
                <SocialAnchor href="https://www.facebook.com/" target="blanck">
                    <SocialIcon className="fab fa-facebook" />
                </SocialAnchor>
            </SocialLi>
            <SocialLi>
                <SocialAnchor href="https://twitter.com/ " target="blanck">
                    <SocialIcon className="fab fa-twitter" />
                </SocialAnchor>
            </SocialLi>
            <SocialLi>
                <SocialAnchor href="https://co.linkedin.com/" target="blanck">
                    <SocialIcon className="fab fa-linkedin" />
                </SocialAnchor>
            </SocialLi>
            <SocialLi>
                <SocialAnchor href="https://github.com/" target="blanck">
                    <SocialIcon className="fab fa-github" />
                </SocialAnchor>
            </SocialLi>
        </SocialUl>

    </SocialStyle>
);

export default Social;