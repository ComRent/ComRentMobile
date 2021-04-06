import React from 'react';
import styled from 'styled-components';
import {connect} from "react-redux";
import Input from "teaset/components/Input/Input";
import {TouchableOpacity} from "react-native-gesture-handler";
import {StyleSheet} from "react-native";

function mapStateToProps( state ) {
    return { action: state.action };
}
class RegisterScreen extends React.Component{
    static navigationOptions = {
        headerShown: false
    };
    render() {
        return (
            <FullContainer>
                <BrownCircle />
                <GrayCircle />
                <Container1>

                </Container1>

                <Container2>
                    <RegisterTitle>注册</RegisterTitle>
                </Container2>
                <Container3>
                    <Box />
                    <TakePlaceView />
                    <Input style={styles.inputLayout}
                           size={"md"}
                           placeholder={"请输入账号"}
                    />
                    <Input style={styles.inputLayout}
                           size={"md"}
                           placeholder={"请输入密码"}
                           secureTextEntry={true}
                    />
                    <Input style={styles.inputLayout}
                           size={"md"}
                           placeholder={"请确认密码"}
                           secureTextEntry={true}
                    />
                    <Input style={styles.inputLayout}
                           size={"md"}
                           placeholder={"请输入手机号"}
                    />
                    <DigitCodeContainer>
                        <Input style={styles.codeInputLayout}
                               size={"md"}
                               placeholder={"请输入验证码"}
                        />
                        <SendDigitCodeButton>
                            <TouchableOpacity>
                                <SendDigitCodeText>发送验证码</SendDigitCodeText>
                            </TouchableOpacity>
                        </SendDigitCodeButton>
                    </DigitCodeContainer>
                </Container3>

                <ContainerProtocol>
                    <ProtocolSymbol>*</ProtocolSymbol>
                    <ProtocolContent>使用本软件默认同意相关使用协议</ProtocolContent>
                </ContainerProtocol>
                <Container4>
                    <TouchableOpacity onPress={() => {
                        this.props.navigation.push("Login");
                    }}>
                        <RegisterButton>
                            <Login>注册</Login>
                        </RegisterButton>
                    </TouchableOpacity>

                </Container4>
                <Container5>
                </Container5>
            </FullContainer>
        );
    }
}

export default connect(mapStateToProps)(RegisterScreen);

const styles = StyleSheet.create({
    textInput: {
        fontSize: 16,
        height: 30
    },
    inputLayout: {
        width: "80%",
        marginBottom: 15,
        marginTop: 15,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 1,
        borderStyle: "dotted",
        borderColor: "#c9bfb6",
        height: 50,
        color: "#a78e7a",
        backgroundColor: "#ffffff",
    },
    codeInputLayout: {
        width: "60%",
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 1,
        borderStyle: "dotted",
        borderColor: "#c9bfb6",
        height: 50,
        color: "#a78e7a",
        backgroundColor: "#ffffff",
    }
});

const FullContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;
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
  height: 18%;
  flex-direction: column;
`
const Container2 = styled.View`
  width: 80%;
  height: 3%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 20px;
`
const RegisterTitle = styled.Text`
  color: #a78e7a;
  font-size: 25px;
  font-weight: 600;
 /* box-shadow: 1px 1px #e2d0c4;
  shadow-radius: 3px;  */
`

const Container3 = styled.View`
  width: 80%;
  height: 50%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  background-color: #ffffff;
  border-radius: 30px;
  box-shadow: 1px 1px #dad9d7;  
  shadow-radius: 5px;
  margin-bottom: 20px;
`
const Box = styled.View`
  position: absolute;
  top: 0;
  width: 50%;
  height: 30px;
  background-color: #e5e5e5;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 1px 1px #dad9d7;  
  shadow-radius: 2px;
`
const TakePlaceView = styled.View`
  height: 30px;
`

const DigitCodeContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 80%;
  margin-bottom: 15px;
  margin-top: 15px;
  border-style: dotted;
  border-color: #c9bfb6;
  height: 50px;
  color: #a78e7a;
`

const SendDigitCodeButton = styled.View`
  border-width: 1px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 70%;
  border-color: #d8d8d8;
`
const SendDigitCodeText = styled.Text`
  color: #ad927d;
`
const ContainerProtocol = styled.View`
  width: 60%;
  height: 20px;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 50px;
  align-items: flex-start;
`
const ProtocolSymbol = styled.Text`
  color: #e26a4c;
  font-size: 25px;
  margin-top: -8px;
  margin-right: 3px;
`
const ProtocolContent = styled.Text`
  color: #5e5e5e;
`
const Container4 = styled.View`
  width: 100%;
  height: 7%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
`
const Container5 = styled.View`
  width: 100%;
  height: 9%;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`
const RegisterButton = styled.View`
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
