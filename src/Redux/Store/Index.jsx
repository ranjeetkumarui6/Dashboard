import { configureStore } from "@reduxjs/toolkit";
import reducer from "../Slices/Index";
const Store=configureStore({
    reducer:{
        rootreducer:reducer
    }
})

export default Store;