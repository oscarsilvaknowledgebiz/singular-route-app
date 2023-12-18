import { createSlice } from '@reduxjs/toolkit'

export const locationFeature = createSlice({
    name: 'location',
    initialState: {
        city: ""
    },
    reducers: {
        updateCity: (state, action) => {
            state.city = action.payload
            return state
        },
    },
})

export const { updateCity } = locationFeature.actions

export default locationFeature.reducer