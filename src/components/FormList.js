import React, { useState } from 'react'
import FormItem from './FormItem'
import styled from 'styled-components'
import Pagination from "./Pagination"
import { connect } from "react-redux";

const FormList = ({ data, error, search, category, order, date}) => {

    // let sortorder, sortdate;
    // console.log(error)

    // const filteredData = data.filter((results) => {
    //     return results.name.search(search) !== -1;
    // }),

    // [page, setPage] = useState(1),
    // [pgAmount] = useState(15),
    // [pgLimit, setpgLimit] = useState(1),
    // [maxPgLimit, setmaxPgLimit] = useState(1),
    // [minPgLimit, setminPgLimit] = useState(1)

    // if (category === "all") {
    //     category = "All";

    // } else if (category === "health") {
    //     category = "Health";
    // } else if (category === "education") {
    //     category = "Education";
    // } else {
    //     category = "E-commerce";
    // }

    // // alphebetically
// chech ascending and descending from w3 schools

    // if (order === "Ascending") {
    //     sortorder = filteredData.sort((a, b) => {
    //         return b.name.localcompare(a.name);
    //     });
    // } else {
    //     sortorder = filteredData;
    // }

    // if (date === "Ascending") {
    //     sortdate = filteredData.sort((a, b) => {
    //         return new Date(a.created) - new Date(b.created);
    //     });
    // } else if (date === "Descending") {
    //     sortdate = filteredData.sort((a, b) => {
    //         return new Date(b.created) - new Date(a.created);
    //     });
    // } else {
    //     sortdate = filteredData;
    // }

    // const ltcontent = page * pgAmount,
    //     ftContent = ltcontent - pgAmount,
    //     crContent = sortorder.slice(ftContent, ltcontent);

    // const paginate = () => {
    //     setPage(page + 1);
    //     if (page + 1 > maxPgLimit) {
    //         setmaxPgLimit(maxPgLimit + pgLimit);
    //         setminPgLimit(minPgLimit + pgLimit);
    //     }
    // };
    return (
  
        <>
            
               <List> 
                
            

                <FormItem />
            
         
        </List>

        {/* <Pagination />  pagination not completed */}
       
</>

        
        )
};

const List = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
align-content: center;
flex-wrap: wrap;
margin-top: 23px;
margin-left: 8.05556%;
margin-right: 8.05556%;

                @media (max-width: 768px){

                    margin-left: 2%;
                    margin-right: 2%;

                    }
`



export default FormList