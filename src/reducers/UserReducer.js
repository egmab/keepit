const initialState = {
  user: 'hello',
  userInfos: null,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USER':
      console.log('yo', action.payload)
      return {
        ...state,
        user: action.payload,
      };
      case 'FETCH_USER_INFOS':
      return {
        ...state,
        userInfos: action.payload,
        // items: state.items.push(action.payload),
      };
      case 'NO_USER':
        return {
          ...initialState
        };

    default:
      return state;
  }
};
export default UserReducer;