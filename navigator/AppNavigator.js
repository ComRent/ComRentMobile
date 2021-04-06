import { createAppContainer} from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LoginScreen from "../screens/LoginGroup/LoginScreen";
import RegisterScreen from "../screens/LoginGroup/RegisterScreen";

import HomeMainScreen from "../screens/Home/HomeMainScreen";

import AllCarsMetConditionScreen from "../screens/ChooseACar/AllCarsMetConditionScreen";

import MapScreen from "../screens/Map/MapScreen";

import MessageMainScreen from "../screens/Message/MessageMainScreen";

import MeMainScreen from "../screens/Me/MeMainScreen";

const AppNavigator = createStackNavigator({
    Login: LoginScreen,
    Register: RegisterScreen,

    HomeMain: HomeMainScreen,

    AllCarsMetCondition: AllCarsMetConditionScreen,

    Map: MapScreen,

    MessageMain: MessageMainScreen,

    MeMain: MeMainScreen,

},{
    mode:'card'
});
export default createAppContainer(AppNavigator);
