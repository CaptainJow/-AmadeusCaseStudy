import {
  SEARCH_FLIGHTS,
  SEARCH_AIRPORTS,
  FETCH_START,
  FETCH_ERROR,
} from "@/constants/ActionTypes";
import data from "../../constants/data/flightData";
import dayjs from "dayjs";
import airportData from "../../constants/data/airports";

export const onSearchFlights = ({
  fromAirport,
  toAirport,
  tripType,
  startDate,
  endDate,
}) => {
  return (dispatch) => {
    try {
      let filteredFlights = data.flights;
      if (
        fromAirport &&
        toAirport &&
        fromAirport.trim() !== "" &&
        toAirport.trim() !== ""
      ) {
        const goingFlights = data.flights.filter(
          (flight) =>
            flight.departure_airport_code === fromAirport &&
            flight.destination_airport_code === toAirport
        );

        if (tripType === "return" && goingFlights.length > 0) {
          const initialArrivalTime = dayjs(goingFlights[0].arrival_time);

          let returnFlights = data.flights.filter(
            (returnFlight) =>
              returnFlight.departure_airport_code === toAirport &&
              returnFlight.destination_airport_code === fromAirport &&
              dayjs(returnFlight.departure_time).isAfter(initialArrivalTime)
          );

          if (endDate && dayjs(endDate).isValid()) {
            returnFlights = returnFlights.filter(
              (returnFlight) =>
                dayjs(returnFlight.departure_time).isSame(dayjs(endDate), 'day')
            );
          }

          filteredFlights = [...goingFlights, ...returnFlights];
        } 
        else {
          filteredFlights = goingFlights;
        }
      }

      if (startDate && dayjs(startDate).isValid() && tripType != "return") {
        filteredFlights = filteredFlights.filter(
          (flight) => dayjs(flight.departure_time).isSame(dayjs(startDate), 'day')
        );
      }
      dispatch({ type: SEARCH_FLIGHTS, payload: filteredFlights });
    } catch (error) {
      // Dispatch the FETCH_ERROR action in case of an error
      dispatch({ type: FETCH_ERROR, payload: error.message });
    }
    // dispatch({ type: FETCH_START });
  };
};

export const onGetAirports = () => {
  return (dispatch) => {
    try {
      dispatch({ type: SEARCH_AIRPORTS, payload: airportData.airports });
    } catch (error) {
      // Dispatch the FETCH_ERROR action in case of an error
      dispatch({ type: FETCH_ERROR, payload: error.message });
    }
    // dispatch({ type: FETCH_START });
  };
};
