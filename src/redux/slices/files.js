import { createSlice } from '@reduxjs/toolkit'

export const filesSlice = createSlice({
    name: 'files',
    initialState: {
        items: [],
    },
    reducers: {
        addFile: (state, action) => {
            state.items = [...state.items, action.payload];
        },
    },
})

// Action creators are generated for each case reducer function
export const { addFile } = filesSlice.actions

export default filesSlice.reducer