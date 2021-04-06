import React from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";
import {TouchableOpacity} from "react-native-gesture-handler";
import { StyleSheet, TextInput, Animated, Easing } from 'react-native';
import Input from "teaset/components/Input/Input";


function mapStateToProps( state ) {
    return { action: state.action };
}

class LoginScreen extends React.Component{
    state = {
        top1: new Animated.Value(-500),
        top2: new Animated.Value(-1000),
        top3: new Animated.Value(900),
        top4: new Animated.Value(-500),
        top5: new Animated.Value(-400),
        bottom1: new Animated.Value(-100),
        left1: new Animated.Value(0),
    }

    componentDidMount() {
        Animated.timing( this.state.top1, {
            toValue: -250,
            duration: 1000,
            easing: Easing.elastic(1),
            useNativeDriver: false,
        }).start();
        Animated.timing( this.state.top2, {
            toValue: -130,
            duration: 1000,
            easing: Easing.elastic(1),
            useNativeDriver: false,
        }).start();
        Animated.timing( this.state.top3, {
            toValue: 200,
            delay: 100,
            duration: 1500,
            easing: Easing.elastic(1),
            useNativeDriver: false,
        }).start();
        Animated.timing( this.state.top4, {
            toValue: 335,
            duration: 1300,
            delay: 1350,
            easing: Easing.bounce,
            useNativeDriver: false,
        }).start();
        Animated.timing( this.state.top5, {
            toValue: 660,
            duration: 1300,
            delay: 1350,
            easing: Easing.bounce,
            useNativeDriver: false,
        }).start();
        Animated.timing( this.state.bottom1, {
            toValue: 145,
            duration: 1500,
            delay: 1350,
            easing: Easing.bounce,
            useNativeDriver: false,
        }).start();
        Animated.timing( this.state.left1, {
            toValue: 0,
            duration: 1350,
            delay: 1500,
            easing: Easing.bounce,
            useNativeDriver: false,
        }).start();
    }

    static navigationOptions = {
        headerShown: false
    };
    render() {
        return (
            <FullContainer>
                <AnimatedBrownCircle style={{ top:this.state.top2 }} />
                <AnimatedGrayCircle style={{ top:this.state.top1 }} />
                <Container1 />

                <AnimatedContainer2 style={{ top:this.state.top3 }} >
                    <ImageContainer1>
                        <ImageContainer>
                            <Avatar source={require("../../assets/CRLogoWithBG.png")}></Avatar>
                        </ImageContainer>
                    </ImageContainer1>
                    <TitleText>{ this.props.action == "openMenu"? "ComRent":""}</TitleText>
                    <SubTitleText>为个人租借与出租车辆提供全新方案</SubTitleText>
                </AnimatedContainer2>

                <AnimatedContainer3 style={{ top:this.state.top4 }} >
                    <Input style={styles.inputLayout}
                           size={"md"}
                           placeholder={"请输入账号"}
                    />
                    <Input style={styles.inputLayout}
                           size={"md"}
                           placeholder={"请输入密码"}
                           secureTextEntry={true}
                    />
                </AnimatedContainer3>

                <AnimatedContainer4 style={{ top:this.state.top5 }}>
                    <TouchableOpacity onPress={() => {
                        this.props.navigation.navigate("Map");
                    }}>
                        <LoginButton>
                            <Login>登录</Login>
                        </LoginButton>
                    </TouchableOpacity>
                </AnimatedContainer4>

                <AnimatedContainer5 style={{ bottom:this.state.bottom1, left:this.state.left1 }}>
                    <ToRegisterView>
                        <StillNoAccount>还没有账号？</StillNoAccount>
                        <TouchableOpacity onPress={() => {
                            this.props.navigation.navigate("Register");
                        }}>
                            <Register>注册</Register>
                        </TouchableOpacity>

                    </ToRegisterView>
                </AnimatedContainer5>
            </FullContainer>
        );
    }
}

export default connect(mapStateToProps)(LoginScreen);

const styles = StyleSheet.create({
    textInput: {
        fontSize: 16,
        height: 30
    },
    inputLayout: {
        width: "90%",
        marginBottom: 20,
        marginTop: 20,
        backgroundColor: "#ffffff",
        borderWidth: 0,
        borderBottomWidth: 1,
        borderStyle: "solid",
        borderColor: "#e9dcd2",
        height: 50,
        color: "#a78e7a",
        textAlign: "left",
    }
});

const FullContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
`
const GrayCircle = styled.View`
  position:absolute;
  left: -180px;
  top: -250px;
  width: 400px;
  height: 400px;
  border-radius: 200px;
  background-color: #555555;
`
const AnimatedGrayCircle = Animated.createAnimatedComponent(GrayCircle)

const BrownCircle = styled.View`
  position:absolute;
  right: -130px;
  top: -130px;
  width: 400px;
  height: 400px;
  border-radius: 200px;
  background-color: #b39780;
`
const AnimatedBrownCircle = Animated.createAnimatedComponent(BrownCircle)
const Container1 = styled.View`
  width: 100%;
  height: 20%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Container2 = styled.View`
  position: absolute;
  width: 100%;
  height: 200px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 20;
`
const AnimatedContainer2 = Animated.createAnimatedComponent(Container2)

const Container3 = styled.View`
  position: absolute;
  width: 70%;
  height: 300px;
  top: 38%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 80px;
  background-color: white;
  border-radius: 30px;
 /* box-shadow: 1px 1px #806148;
  shadow-radius: 6px;  */
`
const AnimatedContainer3 = Animated.createAnimatedComponent(Container3)

const Container4 = styled.View`
  position: absolute;
  width: 100%;
  height: 65px;
  top: 640px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
`
const AnimatedContainer4 = Animated.createAnimatedComponent(Container4)

const Container5 = styled.View`
  width: 100%;
  position: absolute;
  bottom: 170px;
  left: -200px;
  z-index: 100;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`
const AnimatedContainer5 = Animated.createAnimatedComponent(Container5)

const ImageContainer1 = styled.View`
  width: 120px;
  height: 120px;
  box-shadow: 2px 2px #cdcdcd;
  shadow-radius: 5px;
`
const ImageContainer = styled.View`
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 20px;
  overflow: hidden;
`
const Avatar = styled.Image`
  width: 100%;
  height: 100%;
`
const TitleText = styled.Text`
  font-size: 30px;
  font-weight: 500;
  margin-top: 20px;
  letter-spacing: 3px;
`
const SubTitleText = styled.Text`
  font-size: 15px;
  margin-top: 10px;
  font-weight: 400;
`
const LoginButton = styled.View`
  width: 250px;
  height: 90%;
  background-color: #ad927d;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  box-shadow: 2px 2px #cdcdcd;
  shadow-radius: 5px; 
`
const Login = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: white;
`
const ToRegisterView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`
const StillNoAccount = styled.Text`
  
`
const Register = styled.Text`
  color: #a78e7a;
`
