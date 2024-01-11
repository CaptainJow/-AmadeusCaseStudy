
import { SEARCH_FLIGHTS } from '@/constants/ActionTypes';
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
    flightsList: [],
    totalCount: null
};

const mainPageReducer = createReducer(initialState, (builder) => {
    builder.addCase(SEARCH_FLIGHTS, (state, action) => {
        state.flightsList = action.payload;
        // state.totalCount = action.payload.totalCount;
    });

});

export default mainPageReducer;
