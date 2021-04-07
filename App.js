import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import LoginScreen from "./screens/LoginGroup/LoginScreen";
import AppNavigator from "./navigator/AppNavigator";

const initialState = {
    mapAction: "openMenu",
}

const reducer = (state = initialState) => {
    return state;
}

const store = createStore(reducer);

const App = () => (
    <Provider store={store}>
        <AppNavigator />
    </Provider>
)

export default App;
