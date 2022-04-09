import {createSlice} from '@reduxjs/toolkit'

const slice = createSlice({
    name:"user",
    initialState:[{}],
    reducers:{
        getUser:(state)=>{
            state.push({name:"Yash Gaherwar"})
            state.push({name:"Virat"})

        }
    }
})

export default slice.reducer;

export const{getUser} = slice.actions;



