const initialState = {
  items: []
};

const ItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ITEM_PENDING':
      return {
        ...state,
        pending : true,
      };
      case 'FETCH_ITEM_SUCCESS':
      return {
        ...state,
        pending: false,
        items: action.payload,
        // items: state.items.push(action.payload),
      };
      case 'FETCH_ITEM_ERROR':
      return {
        ...state,
        pending: false,
        error: action.payload,
        // items: state.items.splice(action.payload, 1)

      };

    default:
      return state;
  }
};
export default ItemsReducer;