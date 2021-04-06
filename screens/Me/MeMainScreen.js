import React from 'react';
import styled from 'styled-components';
import {LinearGradient} from "expo-linear-gradient";
import {TouchableOpacity} from "react-native-gesture-handler";
import {AntDesign, FontAwesome5, Ionicons} from "@expo/vector-icons";

class MeMainScreen extends React.Component {
    static navigationOptions = {
        headerShown: false
    };

    render() {
        return (
            <FullContainer>
                <ContentFullView>
                    <Title>5</Title>
                </ContentFullView>

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
                        {/* to home start */}
                        <BottomButtonViewL1>
                            <TouchableOpacity onPress={() => {
                                this.props.navigation.navigate("HomeMain");
                            }}>
                                <Ionicons name="home-outline" size={27} color={"rgb(203,181,168)"}/>
                            </TouchableOpacity>
                        </BottomButtonViewL1>
                        {/* to home end */}

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
                                <Ionicons name={"md-person"}
                                          size={25}
                                          color={"#FEF8F3"} />
                            </TouchableOpacity>
                        </BottomButtonViewR>
                        {/* to MeMain end */}
                    </LinearGradient>
                </TabbarFullContainer>
            </FullContainer>
        );
    }
}

export default MeMainScreen;

const FullContainer = styled.View`
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: space-between; /* 上下展开 */
`
const Title = styled.Text``
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
const ContentFullView = styled.View`
    justify-content: center;
    align-items: center;
    height: 80%;
    width: 100%;
`
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
const View3 = styled.View``
