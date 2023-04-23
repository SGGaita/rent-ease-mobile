import AsyncStorage from '@react-native-async-storage/async-storage'

const AuthReducer = (state, action) => {
    switch (action.type) {
      case "LOGIN":
        AsyncStorage.setItem("user", JSON.stringify(action.payload));
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload,
        };
      case "LOGOUT":
        AsyncStorage.removeItem()
        return {
          ...state,
          isAuthenticated: false,
          user: null,
        };
      case "LOGIN_ERROR":
        return {
          ...state,
          loginError: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default AuthReducer;
  