import { createSlice } from "@reduxjs/toolkit";

const uislice=createSlice({
    name:"uislice",
    initialState:{country:false,check:false},
    reducers:{
        HandleCountry:(state,action)=>{
            state.country=!state.country;
        },
        HandleCheck:(state,action)=>{
            state.check=!state.check;
        },
        Handlebody:(state,action)=>{

            state.check=false;
            state.country=false;
        }

    }
})


export const uiActions=uislice.actions;
export default uislice.reducer;