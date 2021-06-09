import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaSistrix } from "react-icons/fa";
import { connect } from "react-redux"
import { fetchfromapi, changesearch, changecategory   } from "../Redux/Actions"

const Search = ({search,onsearchchange, fetchtemplates}) => {
    useEffect(() => {
        fetchtemplates();
    }, []);

    console.log(search);
    const handleChange =(e) => {
        changecategory(e);
        search=''
    }



    // const handleEnter = (e) => {
    //     // if (e.key === 'Enter') {
    //     //     onSearch(searchText);
    //     // }
    //     console.log(e.value)
    // };

    
    return(
        <StyledInput type="text" placeholder="Search Templates" 
        value={search}
        onChange={(e) => onsearchchange(e.target.value)} onKeyPress={(e) => console.log(e.target.value)} />
    )}

const mapStateToProps = (state) => {
    return {
        search: state.search
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onsearchchange: (eventval) => {
            dispatch(changesearch(eventval));
        },
        fetchtemplates: ()=> {
            dispatch(fetchfromapi())
        },
    };
};


const StyledInput = styled.input`
width: 21.40728%;
padding-left: 32px;
border: 0.5px solid #BDBDBD;
border-radius: 4px;
                    @media (max-width: 768px) {
                        width: 22.9%;
                        padding-left: 2px;
                    }
`;


export default connect(mapStateToProps, mapDispatchToProps)(Search);