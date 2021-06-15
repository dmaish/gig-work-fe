import { put, takeLatest } from "redux-saga/effects";

export const actionTypes = {
  Login: "[Login] Action",
  Logout: "[Logout] Action",
  Register: "[Register] Action",
  TokenValid: "[TokenValid] Action",
};

const initialAuthState = {
  user: undefined,
  authToken: undefined,
  tokenValid: false,
  riskProfile: null,
};

export const reducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case actionTypes.Login: {
      const { authToken } = action.payload;
      localStorage.setItem("ndovuToken", authToken.accessToken);
      
      return {
        authToken,
      };
    }

    case actionTypes.Register: {
      const { authToken } = action.payload;

      return { ...state, authToken };
    }

    case actionTypes.Logout: {
      return initialAuthState;
    }

    case actionTypes.TokenValid: {
      const { tokenValid } = action.payload;

      return { ...state, tokenValid };
    }

    default:
      return state;
  }
};

export const actions = {
  login: (authToken) => ({ type: actionTypes.Login, payload: { authToken } }),
  accessTokenValidated: (tokenValid) => {
    localStorage.setItem("tokenValidated", tokenValid);
    return {
      type: actionTypes.TokenValid,
      payload: { tokenValid },
    };
  },
  register: (authToken) => ({
    type: actionTypes.Register,
    payload: { authToken },
  }),
  logout: () => ({ type: actionTypes.Logout }),
};

export function* saga() {
  yield takeLatest(actionTypes.Login, function* loginSaga() {
    yield put(actions.requestUser());
  });

  yield takeLatest(actionTypes.Register, function* registerSaga() {
    yield put(actions.requestUser());
  });
}
