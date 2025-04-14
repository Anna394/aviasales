const initialState = {
  all: false,
  0: false,
  1: false,
  2: false,
  3: true,
};

export default function filterReduser(state = initialState, action) {
  switch (action.type) {
    case "TOGGLE_ALL":
      const newAllState = {};
      const toggleValue = !state.all;
      Object.keys(state).forEach((key) => {
        newAllState[key] = toggleValue;
      });
      return newAllState;
    case "TOGGLE_FILTER":
      const updatedState = {
        ...state,
        [action.payload]: !state[action.payload],
      };
      const allChecked = Object.keys(updatedState)
        .filter((key) => key !== "all")
        .every((key) => updatedState[key]);

      updatedState.all = allChecked;

      return updatedState;
    default:
      return state;
  }
}
