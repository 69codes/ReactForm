import {
    CHANGE_CATEGORY, CHANGE_DATE, CHANGE_ORDER,
    CHANGE_SEARCH, FETCH_TEMPLATE_ERR, FETCH_TEMPLATE_PASS, 
    FETCH_TEMPLATE_REQUEST
} from './Types';
import axios from 'axios'

export const changecategory=(category)=> {
    return {
        type: CHANGE_CATEGORY,
        payload: category

    }
};

export const changedate=(date)=>{
    return{
        type: CHANGE_DATE,
        payload: date
    }
};

export const changeorder=(order)=>{
    return{
        type: CHANGE_ORDER,
        payload: order
    }
};

export const changesearch=(search)=>{
    return{
        type: CHANGE_SEARCH,
        payload: search
    }
};

export const fetchtemplateerr=(error)=>{
    return{
        type: FETCH_TEMPLATE_ERR,
        payload: error
    }
};

export const fetchtemplatepass=(pass)=>{
    return{
        type: FETCH_TEMPLATE_PASS,
        payload: pass
    }
};

export const fetchtemplaterequest=() =>{
    return{
        type: FETCH_TEMPLATE_REQUEST,
    }
};

export const fetchfromapi = () => {

    return (dispatch) => {
        dispatch( fetchtemplaterequest )
      return axios.get(
        "https://front-end-task-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates"
      )

        
      .then(result=> dispatch(fetchtemplatepass(result.data)))
      .catch(error => dispatch(fetchtemplateerr(error.message)));
    };
  };