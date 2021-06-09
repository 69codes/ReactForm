import React, { useEffect } from "react";
import styled from "styled-components";
import Search from "./Search";
import { connect } from "react-redux";
import { FaChevronDown } from "react-icons/fa";
import { changesearch, fetchfromapi, changeorder, changedate, changecategory } from "../Redux/Actions";



const Header = ({ date, order, fetchtemplates, changecategory, changeorder, changedate, onsearchchange}) => {
    useEffect(() => {
        fetchtemplates()
    }, []);

    const handleChange=(e)=> {
        changecategory(e);
        date = 'Default'
        order = 'Default'
    }
    return(
        <StyledHeader>

             <Search />      
            <SecondDiv> 

            <Sort>Sort By:</Sort>  
            <Drops> 
                
                <Inside>Category</Inside> </Drops> 
            <Drops> <Inside>Order</Inside> </Drops>
            <Drops> <Inside>Date</Inside> </Drops>

            </SecondDiv>

        </StyledHeader>
)
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchtemplates: ()=>{
            dispatch(fetchfromapi())
        },
        changecategory:(e)=>{
            dispatch(changecategory(e))
        },
        changeorder:(e)=>{
            dispatch(changeorder(e))
        },
        changedate:(e)=>{
            dispatch(changedate(e))
        },
    }
};
const mapStateToProps = (state) => {
    return {
        date: state.date,
        order: state.order,
    }
}
/*Using Styled Components, to create Reusable Components */

const StyledHeader = styled.div`
display: flex;
height: 45px;
margin-left: 8.05556%;
margin-right: 8.05556%;
margin-top: 79px;
justify-content: space-between;
flex-wrap: nowrap;

                    @media (max-width: 768px) {
                        margin-left: 2%;
                        margin-right: 2%;
                        margin-top: 39.5px;
                        height: 39px;
                    }

`;

const SecondDiv = styled.div`
width: 48.841%;
display: flex;

align-items: flex-end;
                @media (max-width: 768px) {
                    width: 68.4%;
                }

`;

const Sort = styled.div`
width: 8.4745763%;
height: 18px;
margin-right: 1.69491525%;
font-size: 13.179px;
margin-bottom: 10px;
font-weight: 400;
color: #989898;
line-height: 18px;
                    @media(max-width: 768px){
                        width: 13%;
                        font-size: 11px;
                        margin-bottom: 5px;
                    }

                    @media(max-width: 420px){
                        display: none;
                    }

`;

const Drops = styled.div`
width: 27.118644%;
border-style: solid;
height: 39px;
margin-left: 3.38983%;
border: 0.5px solid #C4C4C4;
border-radius: 4px;
                
                @media (max-width: 768px) {
                    height: 26px;
                }

`;

const Inside = styled.div`
max-width: fit-content;
border-style: solid;
border-width: 4px;
border-color: white;
z-index: 1;
margin-top: -11px;
background-color: white;
font-size: 10.5px;
letter-spacing: 0.01em;
margin-left: 14%;
line-height: 13px;
color: #8F8B8B;
                @media(max-width: 321px) {
                    display: none;
                }
`;







export default connect(mapStateToProps, mapDispatchToProps) (Header)