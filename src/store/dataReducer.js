const initialState = {
  items: [],
  loading: false,
  error: null,
  isDataFullyLoaded: false,
};

const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
const FETCH_DATA_SUCCESS_PARTIAL = "FETCH_DATA_SUCCESS_PARTIAL";
const FETCH_DATA_COMPLETE = "FETCH_DATA_SUCCESS";
const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

export function dataReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        items: [],
        isDataFullyLoaded: false,
      };
    case FETCH_DATA_SUCCESS_PARTIAL:
      return { ...state, items: [...state.items, ...action.payload] };
    case FETCH_DATA_COMPLETE:
      return { ...state, loading: false, isDataFullyLoaded: true };
    case FETCH_DATA_FAILURE:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
}

export const fetchDataRequest = () => ({ type: FETCH_DATA_REQUEST });
export const fetchDataSuccessPartial = (data) => ({
  type: FETCH_DATA_SUCCESS_PARTIAL,
  payload: data,
});
export const fetchDataComplete = () => ({ type: FETCH_DATA_COMPLETE });
export const fetchDataFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  error,
});
