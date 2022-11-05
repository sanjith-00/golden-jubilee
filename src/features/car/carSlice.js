/* eslint-disable*/
import { createSlice } from "@reduxjs/toolkit";
 
const initialState = {
    cars: ["HOME", "EVENTS", "REGISTRATION", "CONTACTS"]
}

const carSlice = createSlice({
    name: "car",
    initialState,
    reducers: {}
})

export const selectCars = state => state.car.cars;

export default carSlice.reducer