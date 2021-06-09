import React from 'react'
import styled from 'styled-components'

const Description = () => {
    return (
        <Temp> <TempName>All Templates</TempName>   <TempCount>2000 templates</TempCount>        </Temp>
    )
}

const Temp = styled.div`

margin-top: 63px;
margin-left: 8.05556%;
margin-right: 8.05556%;
display: flex;
justify-content: space-between;

@media (max-width: 768px){

margin-left: 2%;
margin-right: 2%;

}
`;

const TempName = styled.div`
color: #3F3E3E;
font-size: 18px;
line-height: 23px;
`;

const TempCount = styled.div`
color: #989898;
font-size: 14px;
line-height: 18px;
`;

export default Description
