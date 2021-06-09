import React from "react"
import styled from "styled-components"

 const Tada = () => {
     return (
        <Notice> <p>Tada! Get started with a free template. Can't find what you are looking for? Search from the 1000+ available templates</p> </Notice>
     )
 }

const Notice = styled.div`
margin-top: 83px;
margin-left: 8.05556%;
margin-right: 8.05556%;
height: 60px;
background-color: #FFF4EA;
border-radius: 4px;
text-align: center;
display: flex;
align-items: center;
justify-content: center;




            @media (max-width: 768px){
                height: 40px;
                margin-left: 2%;
                margin-right: 2%;
                margin-top: 39px;


                    & > p {
                        padding-top: 1.2px;
                        font-size: 13.4px;
                        
                        
                    }
            }
`;


 export default Tada