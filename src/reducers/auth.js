// Note: reducer xử lý việc xác thực người dùng
const SET_IS_AUTH = 'SET_IS_AUTH';

// ! normal action

// fn: set authentication cho người dùng
const setIsAuth = (isAuth) => {
  return { type: SET_IS_AUTH, payload: { isAuth } };
};

// ! reducers
const initialState = { isAuth: false };

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_AUTH:
      const { isAuth } = action.payload;
      return { ...state, isAuth };
    default:
      return { ...state };
  }
};


// ! exports
export {
  authReducer,
  SET_IS_AUTH,
  setIsAuth,
};