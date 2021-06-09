import React, { useState, useEffect } from "react"
import axios from 'axios'
import Header from "./Header"
import Tada from "./Tada"
import Description from "./Description"
import FormList from "./FormList"
import { Provider } from 'react-redux'
import store from '../Redux/store'

const FormContainer = () => {
    return(
        <Provider store = {store}>
        <Header />
        <Tada  />
        <Description />
        <FormList />
        </Provider>
    )
};

export default FormContainer