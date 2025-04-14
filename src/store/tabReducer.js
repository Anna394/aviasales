const initialState = {
  activeTab: "cheap",
};

export default function tabReducer(state = initialState, action) {
  switch (action.type) {
    case "TOGGLE_TAB":
      const newState = {};
      Object.keys(state).forEach((key) => {
        newState[key] = action.payload;
      });
      return newState;
    default:
      return state;
  }
}
