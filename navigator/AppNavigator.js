import { createAppContainer} from "react-navigation";
import LoginScreen from "../screens/LoginGroup/LoginScreen";
import { createStackNavigator } from "react-navigation-stack";
import AllCarsMetConditionScreen from "../screens/ChooseACar/AllCarsMetConditionScreen";
const AppNavigator = createStackNavigator({
    Login: LoginScreen,
    AllCarsMetCondition: AllCarsMetConditionScreen
})
export default createAppContainer(AppNavigator);
