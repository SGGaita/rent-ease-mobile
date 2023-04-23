import { createContext, useReducer, useEffect } from "react";
import AuthReducer from "./AuthReducer";
import AsyncStorage from '@react-native-async-storage/async-storage'

export const AuthContext = createContext({
  state: {},
  dispatch: () => {},
});

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, {});
  
    useEffect(() => {
      async function loadUser() {
        const user = await AsyncStorage.getItem("user");
        const initialState = {
          isAuthenticated: user ? true : false,
          user: user ? JSON.parse(user) : null,
          loginError: null,
        };
        dispatch({ type: "SET_INITIAL_STATE", payload: initialState });

        console.log('user',user)
      }
  
      loadUser();
    }, []);
  
    return (
      <AuthContext.Provider value={{ state, dispatch }}>
        {children}
      </AuthContext.Provider>
    );
  };





