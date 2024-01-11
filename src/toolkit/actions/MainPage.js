import {
  SEARCH_FLIGHTS,
  FETCH_START,
  FETCH_ERROR,
} from "@/constants/ActionTypes";
import  data from '../../data/flightData'

export const onSearchFlights = ({ search}) => {
  return  (dispatch) => {
    try {

        console.log(data)
        dispatch({ type: SEARCH_FLIGHTS, payload: data.flights });
      } catch (error) {
        // Dispatch the FETCH_ERROR action in case of an error
        dispatch({ type: FETCH_ERROR, payload: error.message });
      }
    // dispatch({ type: FETCH_START });
   
  };
};
