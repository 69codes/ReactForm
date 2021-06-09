import React from 'react'
import styled from 'styled-components'
import Description from './Description'

const FormItem = () => {
    return(
        <>
        <Cards>
            {/*  Testing the css */}

            <Name>Alumni Membership Form Template</Name>
            <Dscription>Engage your alumni network better with this 
                alumni registration form template. Embed this in your website ...
            </Dscription>
            <UseLink>Use Template</UseLink>
        </Cards>

        <Cards></Cards>
        <Cards></Cards>
        </>
    )
};


const Cards = styled.div`
width: 358px;
height: 229px;
border-radius: 4px;
box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.08);
margin-bottom: 30px; 


`;   



const Name = styled.div`
height: fit-content;
font-size: 24px;
font-weight: 500;
margin-left: 5.307263%;
margin-right: 12.0111732%;
margin-top: 8.29694323%;
line-height: 30.36px;
color: #333447;
`;



const Dscription = styled.div`
height: fit-content;
margin-left: 5.307263%;
font-size: 14px;
font-weight: 400;
color: #3F3E3E;
margin-top: 7.423581%;
line-height: 17px;
`;



const UseLink = styled.div`
height: 41px;
background-color: #F9F9F9;
margin-top: 10.4%;
display: flex;
padding-left: 5.307263%;
align-items: center;
color: #08BD37;
line-height: 17.71px;
font-weight: 400;
`;



 export default FormItem