import React from 'react'
import styled from "styled-components"
import { FaChevronRight } from "react-icons/fa"

const Pagination = ({pgAmount, paginate, prevPg, totalContent,
pgLimit, minPgLimit, maxPgLimit}) => {
    const pgNumbers = [], totalRows = Math.ceil(totalContent/pgAmount);

    for (let i = 1; i <= totalRows; i++) {
        pgNumbers.push(i);
    }
// Needs to be reviewed 
    return (
        <Footer>
            { pgNumbers.map(i => {
                if (i > minPgLimit && i <= maxPgLimit) {
                    return (
                        <>
                        <Left>
                            <LButton onClick={()=> prevPg()}> Previous </LButton>
                        </Left>

                        <Centre>
                            <Pager>{i}</Pager> <NofPages>of {totalRows}</NofPages>
                        </Centre>

                        <Right>
                            <RButton onClick={()=> paginate()}>

                            </RButton>
                        </Right>
                        </>
                    )
                } else {
                    return null;
                }
            })}

        </Footer>
        
    )


}

//pagination is incomplete

const Footer = styled.div`
width: 1000px;
`;

const Left = styled.div`

`;
const LButton = styled.button`

`;
const Centre = styled.div`

`;

const Pager = styled.span`

`;
const NofPages = styled.span`

`;
const Right = styled.div`

`;
const RButton = styled.button`

`;

export default Pagination 