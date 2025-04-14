import {
  fetchDataRequest,
  fetchDataComplete,
  fetchDataFailure,
  fetchDataSuccessPartial,
} from "./dataReducer";

export const fetchData = () => {
  return async (dispatch) => {
    dispatch(fetchDataRequest());
    try {
      const searchResponse = await fetch(
        "https://aviasales-test-api.kata.academy/search"
      );
      if (!searchResponse.ok) {
        throw new Error(
          `Ошибка получения searchResponse : ${searchResponse.status}`
        );
      }
      const searchData = await searchResponse.json();
      const searchId = searchData.searchId;

      let stop = false;

      while (!stop) {
        try {
          const ticketResponse = await fetch(
            `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`
          );

          if (!ticketResponse.ok) {
            throw new Error(
              `Ошибка получения билетов: ${ticketResponse.status}`
            );
          }

          const ticketData = await ticketResponse.json();

          dispatch(fetchDataSuccessPartial(ticketData.tickets));

          stop = ticketData.stop;
        } catch (error) {
          console.warn(error.message);
          continue;
        }
      }

      dispatch(fetchDataComplete());
    } catch (error) {
      dispatch(fetchDataFailure(error.message));
    }
  };
};
