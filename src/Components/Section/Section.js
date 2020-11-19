import React from 'react';
import styled from 'styled-components';
const H2 = styled.h2`
font-size: 38px;
text-align: center;
`;

const Section = ({title, children}) => {
    return (
        <div>
            <H2>{title}</H2>
            {children}
        </div>
    );
};

export default Section;