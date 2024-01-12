
import { SEARCH_FLIGHTS, SEARCH_AIRPORTS } from '@/constants/ActionTypes';
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
    flightsList: [],
    airportsList:[],
    totalCount: null
};

const mainPageReducer = createReducer(initialState, (builder) => {
    builder.addCase(SEARCH_FLIGHTS, (state, action) => {
        state.flightsList = action.payload;
        // state.totalCount = action.payload.totalCount;
    })
    .addCase(SEARCH_AIRPORTS, (state, action) => {
        state.airportsList = action.payload;
        // state.totalCount = action.payload.totalCount;
    });

});

export default mainPageReducer;
