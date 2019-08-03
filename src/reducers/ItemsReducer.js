const initialState = {
  items: []
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        items: state.items.push(action.payload),
      };
      case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.splice(action.payload, 1)
      };
    default:
      return state;
  }
};
export default rootReducer;