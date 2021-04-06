import React from 'react';
import styled from 'styled-components';

import { LinearGradient } from 'expo-linear-gradient';
import {TouchableOpacity} from "react-native-gesture-handler";
import {Animated} from "react-native";

import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

class MapScreen extends React.Component {
    static navigationOptions = {
        headerShown: false
    };

    toggleTouchWhiteBall = () => {

    }
    render() {
        return (
            <FullContainer>
                <MapImage source={require("./Map.png")} />
                <TopTabContainer>
                    <LinearGradient
                        colors={['rgb(129,102,83)', '#b8a79d']}
                        style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: 23,
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                        }}
                    >
                        <CityText>北京市</CityText>
                    </LinearGradient>

                </TopTabContainer>




                <BottomContainer>

                    <LinearGradient
                        // Background Linear Gradient
                        colors={['rgb(191,174,163)','rgb(178,156,142)','rgb(178,156,142)' ,'rgb(178,156,142)', 'rgb(170,149,135)']}
                        style={{
                            width: '105%',
                            height:60,
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'row',
                            position: "absolute",
                            bottom: 23,
                            borderRadius: 40,
                        }}
                    />

                    <WhiteBallView>
                        <TouchableOpacity onPress={this.toggleTouchWhiteBall}>
                            <WhiteBall>
                                <Entypo name="chevron-up" size={35} color="rgb(178,156,142)" />
                            </WhiteBall>
                        </TouchableOpacity>
                    </WhiteBallView>

                    <TabbarFullContainer>
                        <LinearGradient
                            // Background Linear Gradient
                            colors={['rgb(178,156,142)', '#755841']}
                            style={{
                                marginBottom: -40,
                                width: '100%',
                                height:87,
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'row',
                                zIndex: 1,
                            }}
                        >
                            {/* to main start */}
                            <BottomButtonView>
                                <TouchableOpacity onPress={() => {
                                    this.props.navigation.navigate("HomeMain");
                                }}>
                                    <Ionicons name="home-outline" size={27} color={"rgb(203,181,168)"}/>
                                </TouchableOpacity>
                            </BottomButtonView>
                            {/* to main end */}

                            {/* to message list start */}
                            <BottomButtonView>
                                <TouchableOpacity onPress={() => {
                                    this.props.navigation.navigate("MessageMain");
                                }}>
                                    <Ionicons name="chatbubbles-outline"
                                              size={27}
                                              color={"rgb(203,181,168)"} />
                                </TouchableOpacity>
                            </BottomButtonView>
                            {/* to message list end */}

                            {/* to Map start */}
                            <BottomButtonView>
                                <TouchableOpacity>
                                    <FontAwesome5 name={"map-marked-alt"}
                                                  size={24}
                                                  color={"#FEF8F3"}/>
                                </TouchableOpacity>
                            </BottomButtonView>
                            {/* to Map end */}

                            {/* toChooseACar start */}
                            <BottomButtonView>
                                <TouchableOpacity onPress={() => {
                                    this.props.navigation.navigate("AllCarsMetCondition");
                                }}>
                                    <AntDesign name={"enviromento"}
                                               size={25}
                                               color={"rgb(203,181,168)"}
                                    />
                                </TouchableOpacity>
                            </BottomButtonView>
                            {/* to ChooseACar end */}

                            {/* to MeMain start */}
                            <BottomButtonView>
                                <TouchableOpacity onPress={() => {
                                    this.props.navigation.navigate("MeMain");
                                }}>
                                    <Ionicons name={"md-person-outline"}
                                              size={25}
                                              color={"rgb(203,181,168)"} />
                                </TouchableOpacity>
                            </BottomButtonView>
                            {/* to MeMain end */}
                        </LinearGradient>
                    </TabbarFullContainer>
                </BottomContainer>
            </FullContainer>
        );
    }


}
export default MapScreen;

const FullContainer = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;  /* 左右居中 */
  justify-content: space-between; /* 上下展开 */
  background-color: white;
`
const MapImage = styled.Image`
  position: absolute;
  top: 52px;
  width: 100%;
  height: 100%;
`
const TopTabContainer = styled.View`
  height: 93px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 1px #b7a9a0;
  shadow-radius: 3px;
`
const CityText = styled.Text`
  margin-bottom: 13px;
  font-size: 20px;
  font-weight: 500;
`
const BottomContainer = styled.View`
  width: 100%;
  height: 110px;
  flex-direction: column;
  align-items: center;
`
const WhiteBallView = styled.View`
  width: 64px;
  height: 64px;
  background-color: white;
  border-radius: 32px;
  box-shadow: 0px 3px #b3a193;
  shadow-radius: 8px;
  align-items: center;
  margin-top: 10px;
`
const WhiteBall = styled.View`
  width: 100%;
  height: 100%;
`
const TabbarFullContainer = styled.View`
  width: 100%;
  height: 90px;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  background-color: transparent;
  z-index: 100;
  position: absolute;
  bottom: 20px;
`;

const BottomButtonView = styled.View`
  margin-bottom: 30px;
  width: 18%;
  align-items: center;
`
