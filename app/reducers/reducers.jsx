export var searchTextReducer = (state= '',action) => {
  switch (action.type) {
    case 'SET_SEARCH_TEXT':
      return action.searchText;
    default:
      return state;
  };
};

// showcompletedReducer, default false, TOGGLE_SHOW_COMPLETED
export var showCompletedReducer = () => {
  switch (action.type) {
    case 'TOGGLE_SHOW_COMPLETED':
      return !state;
    default:
      return state;
  };
};
