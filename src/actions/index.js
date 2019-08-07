
const fetchItemPending = () => {
    return {
        type: 'FETCH_ITEM_PENDING',
    }
}

const fetchItemSuccess = (products) => {
    return {
        type: 'FETCH_ITEM_SUCCESS',
        paylaod: products
    }
}

const fetchItemError = (error) => {
    return {
        type: 'FETCH_ITEM_ERROR',
        payload: error
    }
}


export const fetchItem = (item) => {
  // simulate asynch action / to replace by a server call
  // return dispatch => {
  //   setTimeout(() => {
  //     dispatch({ type: 'ADD_ITEM', payload : item });
  //   }, 2000);
  // }

    return dispatch => {
        dispatch(fetchItemPending());
        fetch('https://exampleapi.com/products')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchItemSuccess(res.products));
            return res.products;
        })
        .catch(error => {
            dispatch(fetchItemError(error));
        })
    }
}

// export function removeItem(index) {
//   return { type: 'REMOVE_ITEM', payload : index }
// }