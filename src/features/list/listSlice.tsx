import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ListState{
    value:string[];
}

const initialState: ListState = {
    value:[]
}

const listSlice = createSlice({
    name: 'list',
    initialState,
    reducers:{
         addInList: (state, action: PayloadAction<string>) => {
            state.value.push(action.payload); 
         },
         removeFromList: (state, action: PayloadAction<number>) => {
            state.value.splice(action.payload,1); 
         }
    }
});

export const { addInList,removeFromList} = listSlice.actions;

export default listSlice.reducer;