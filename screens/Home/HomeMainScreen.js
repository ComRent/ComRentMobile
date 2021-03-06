import React from 'react';
import styled from 'styled-components';
import {LinearGradient} from "expo-linear-gradient";
import {AntDesign, FontAwesome5, Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
import {TouchableOpacity} from "react-native-gesture-handler";
import { Octicons } from '@expo/vector-icons';
import {View} from "react-native-web";
class HomeMainScreen extends React.Component {
    static navigationOptions = {
        headerShown: false
    };

    render() {
        return (
            <FullContainer>

                <ContentFullContainer>
                    <Title>1</Title>
                </ContentFullContainer>
                <TabbarFullContainer>
                    <LinearGradient
                        // Background Linear Gradient
                        colors={['rgb(203,181,168)', '#755841']}
                        style={{
                            marginBottom: -30,
                            marginLeft: -25,
                            width: '50%',
                            height:102,
                            borderRadius: 35,
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'row',
                        }}
                    >

                        <BottomButtonViewL1>
                            <TouchableOpacity>
                                <Ionicons name="home" size={27} color={"#FEF8F3"}/>
                            </TouchableOpacity>
                        </BottomButtonViewL1>

                        {/* to message list start */}
                        <BottomButtonViewR1>
                            <TouchableOpacity onPress={() => {
                                this.props.navigation.navigate("MessageMain");
                            }}>
                                <Ionicons name="chatbubbles-outline"
                                          size={27}
                                          color={"rgb(203,181,168)"} />
                            </TouchableOpacity>
                        </BottomButtonViewR1>
                        {/* to message list end */}

                    </LinearGradient>

                    {/* to map start */}
                    <LinearGradient
                        // Background Linear Gradient
                        colors={['rgb(203,181,168)', '#755841']}
                        style={{
                            marginBottom: -37,
                            width: 66,
                            height:120,
                            marginLeft: -1,
                        }}
                    >
                        <MiddleBigCircle>
                            <LinearGradient
                                // Background Linear Gradient
                                colors={['rgb(203,181,168)', '#755841']}
                                style={{
                                    width: 52,
                                    height: 52,
                                    borderRadius: 26,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <View3>
                                    <TouchableOpacity onPress={() => {
                                        this.props.navigation.navigate("Map");
                                    }}>
                                        <FontAwesome5 name={"map-marked"}
                                                      size={24}
                                                      color={"rgb(203,181,168)"}
                                                      style={{marginLeft:0,}} />
                                    </TouchableOpacity>
                                </View3>

                            </LinearGradient>
                        </MiddleBigCircle>
                    </LinearGradient>
                    {/* to map end */}

                    <LinearGradient
                        // Background Linear Gradient
                        colors={['rgb(203,181,168)', '#755841']}
                        style={{
                            marginBottom: -30,
                            marginLeft: -1,
                            width: '50%',
                            height:102,
                            borderRadius: 35,
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'row',
                        }}
                    >
                        {/* to select cars start */}
                        <BottomButtonViewL>
                            <TouchableOpacity onPress={() => {
                                this.props.navigation.navigate("AllCarsMetCondition");
                            }} >
                                <AntDesign name={"enviromento"}
                                           size={25}
                                           color={"rgb(203,181,168)"}
                                />
                            </TouchableOpacity>
                        </BottomButtonViewL>
                        {/* to select cars end */}

                        {/* to MeMain start */}
                        <BottomButtonViewR>
                            <TouchableOpacity onPress={() => {
                                this.props.navigation.navigate("MeMain");
                            }}>
                                <Ionicons name={"md-person-outline"}
                                          size={25}
                                          color={"rgb(203,181,168)"} />
                            </TouchableOpacity>
                        </BottomButtonViewR>
                        {/* to MeMain end */}
                    </LinearGradient>
                </TabbarFullContainer>
            </FullContainer>
        );
    }
}

export default HomeMainScreen;

const FullContainer = styled.View`
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: space-between; /* ???????????? */
`
const ContentFullContainer = styled.View`
  width: 100%;
  height: 80%;
  justify-content: center;
  align-items: center;
`
const TabbarFullContainer = styled.View`
  left: -6px;
  width: 100%;
  height: 90px;
  flex-direction: row;
  align-items: flex-end;
  background-color: transparent;
`;

const MiddleBigCircle = styled.View`
  width: 100%;
  height: 66px;
  border-bottom-left-radius: 33px;
  border-bottom-right-radius: 33px;
  background-color: white;
  align-items: center;
`
const View3 = styled.View``

const BottomButtonViewL = styled.View`
  margin-bottom: 30px;
`
const BottomButtonViewR = styled.View`
  margin-bottom: 30px;
  margin-right: 20px;
  margin-left: 35px;
`
const BottomButtonViewL1 = styled.View`
  margin-bottom: 30px;
  margin-left: 10px;
`
const BottomButtonViewR1 = styled.View`
  margin-bottom: 30px;
  margin-left: 40px;
`
const Title = styled.Text`
font-size: 100px;
`
