//======= constant action type =======//
const ADD_ADDRESS = 'ADD_ADDRESS';
const DEL_ADDRESS = 'DEL_ADDRESS';
//======= actions request (call API) =======//

//======= actions =======//
const addAddress = (info) => {
  return {
    type: ADD_ADDRESS,
    payload: info,
  };
};

const delAddress = () => {
  return {
    type: DEL_ADDRESS,
  };
};

//======= initial state =======//
const deliveryAddress = JSON.parse(localStorage.getItem('deliveryAddress'));
const initialState = deliveryAddress ? deliveryAddress : {};

//======= reducer =======//
const addressReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ADDRESS: {
      const item = action.payload;
      // cập nhật lại local storage
      localStorage.setItem('deliveryAddress', JSON.stringify(item));
      return item;
    }

    case DEL_ADDRESS: {
      // cập nhật lại local storage
      localStorage.setItem('deliveryAddress', JSON.stringify({}));
      return {};
    }
    default:
      return state;
  }
};

//======= exports =======//
export {
  addressReducer,
  ADD_ADDRESS,
  DEL_ADDRESS,
  addAddress,
  delAddress,
};
