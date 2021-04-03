import React from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";
import {TouchableOpacity} from "react-native-gesture-handler";
import {TextInputLayout} from 'rn-textinputlayout';
import { StyleSheet, TextInput } from 'react-native';

function mapStateToProps( state ) {
    return { action: state.action };
}

class LoginScreen extends React.Component{
    static navigationOptions = {
        headerShown: false
    };
    render() {
        return (
            <FullContainer>
                <BrownCircle />
                <GrayCircle />
                <Container1 />

                <Container2>
                    <ImageContainer1>
                        <ImageContainer>
                            <Avatar source={require("../../assets/CRLogoWithBG.png")}></Avatar>
                        </ImageContainer>
                    </ImageContainer1>
                    <TitleText>{ this.props.action == "openMenu"? "ComRent":""}</TitleText>
                    <SubTitleText>为个人租借与出租车辆提供全新方案</SubTitleText>
                </Container2>

                <Container3>
                    <TextInputLayout
                        style={styles.inputLayout}
                    >
                        <TextInput
                            style={styles.textInput}
                            placeholder={'账号'}
                        />
                    </TextInputLayout>

                    <TextInputLayout style={styles.inputLayout}>
                        <TextInput
                            style={styles.textInput}
                            placeholder={'密码'}
                            secureTextEntry={true}
                        />
                    </TextInputLayout>
                </Container3>

                <Container4>
                    <TouchableOpacity onPress={() => {
                        this.props.navigation.push("AllCarsMetCondition");
                    }}>
                        <LoginButton>
                            <Login>登录</Login>
                        </LoginButton>
                    </TouchableOpacity>
                    <ToRegisterView>
                        <StillNoAccount>还没有账号？</StillNoAccount>
                        <TouchableOpacity onPress={() => {
                            this.props.navigation.push("AllCarsMetCondition");
                        }}>
                            <Register>注册</Register>
                        </TouchableOpacity>

                    </ToRegisterView>
                </Container4>
                <Container5 />
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
        marginTop: 16,
        marginHorizontal: 36,
        width: "60%",
        marginBottom: 20,
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

const BrownCircle = styled.View`
  position:absolute;
  right: -130px;
  top: -130px;
  width: 400px;
  height: 400px;
  border-radius: 200px;
  background-color: #b39780;
`

const Container1 = styled.View`
  width: 100%;
  height: 20%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Container2 = styled.View`
  width: 100%;
  height: 30%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Container3 = styled.View`
  width: 100%;
  height: 20%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Container4 = styled.View`
  width: 100%;
  height: 15%;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  align-content: flex-start;
`
const Container5 = styled.View`
  width: 100%;
  height: 15%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
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
  height: 50px;
  background-color: #ad927d;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  margin-top: 40px;
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
