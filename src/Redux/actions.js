 import {DATA_PRODUCT, SORT_PRODUCT,PRODUCT_SUCCESS} from "./actionTypes"

// action for get products request
const getProductsReq = () => ({});

// action for get products success

export const getProductsSuccess = () => ({
    type:PRODUCT_SUCCESS
});

// action for get products failure

const getProductsFailure = () => ({});

// thunk call to fetch products  list
export const getproductsData = (payload) => ({
    type:DATA_PRODUCT,
    payload,
});

// action object for sort  feature

export const sortProducts = (payload) => ({
    type:SORT_PRODUCT,
    payload,
});
